/**
 * author       Mat Hopwood
 * copyright    2014 Mat Hopwood
 * More info    http://booty5.com
 */
"use strict";
//
// Attractor actions are actions that attract or repel other objects
//
// A_AttractX           - Pulls objects towards or repels objects away on the x-axis that are within a specific range
// A_AttractY           - Pulls objects towards or repels objects away on the y-axis that are within a specific range
// A_Attract            - Pulls objects towards or repels objects away on the x and y-axis that are within a specific range

/**
 * Action that pulls objects towards or repels objects away on the x-axis that are within a specific range, does not exit
 *
 * Created actions should be added to an actor or scenes actions list to be processed
 *
 * For a complete overview of Actions see {@link http://booty5.com/html5-game-engine/booty5-html5-game-engine-introduction/actions-building-with-blocks/ Booty5 Actions Overview}
 *
 * @class b5.A_AttractX
 * @constructor
 * @returns {b5.A_AttractX}             The created action
 * @param target {string:b5.Actor}      Path to or instance of actor object that will attract other objects
 * @param container {b5.Actor|b5.Scene} Path to or instance of object that contains the actors (actors that can be attracted have attract property set to true)
 * @param min_x {number}                Minimum x-axis attraction range
 * @param max_x {number}                Maximum x-axis attraction range
 * @param min_y {number}                Minimum y-axis inclusion range
 * @param max_y {number}                Maximum y-axis inclusion range
 * @param strength {number}             Strength of attraction, negative for repulsion
 * @param stop {boolean}                If set to true then attracted objects will stop when they hit the min distance range
 * @param bounce {boolean}              If set to true then objects when stopped at the min distance range will bounce
 *
 */
b5.A_AttractX = function(target, container, min_x, max_x, min_y, max_y, strength, stop, bounce)
{
    this.target = target;
    this.container = container;
    this.min_x = min_x;
    this.max_x = max_x;
    this.min_y = min_y;
    this.max_y = max_y;
    this.strength = strength;
    this.stop = stop;
    this.bounce = bounce;
};
b5.A_AttractX.prototype.onTick = function()
{
    this.target = b5.Utils.resolveObject(this.target);
    this.container = b5.Utils.resolveObject(this.container);
    var target = this.target;
    var actors = this.container.actors;
    var count = actors.length;
    var x = target.x;
    var y = target.y;
    var min_x = this.min_x;
    var max_x = this.max_x;
    var min_y = this.min_y;
    var max_y = this.max_y;
    var strength = this.strength;
    var stop = this.stop;
    var bounce = this.bounce;
    for (var t = 0; t < count; t++)
    {
        var actor = actors[t];
        if (actor.attract !== undefined)
        {
            var dy = actor.y - y;
            if (dy > min_y && dy < max_y)
            {
                var dx = x - actor.x;
                if (dx < min_x && dx > -min_x)
                {
                    if (stop)
                    {
                        if (actor.x < x)
                            actor._x = x - min_x;
                        else
                        if (actor.x > x)
                            actor._x = x + min_x;
                        if (bounce)
                            actor.vx = -actor.vx;
                        else
                            actor.vx = 0;
                    }
                }
                else if (dx > min_x && dx < max_x)
                    actor.vx += strength;
                else if (dx > -max_x && dx < -min_x)
                    actor.vx -= strength;
            }
        }
    }

    return true;
};
b5.ActionsRegister.register("AttractX", function(p) { return new b5.A_AttractX(p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9]); });

/**
 * Action that pulls objects towards or repels objects away on the y-axis that are within a specific range, does not exit
 *
 * Created actions should be added to an actor or scenes actions list to be processed
 *
 * For a complete overview of Actions see {@link http://booty5.com/html5-game-engine/booty5-html5-game-engine-introduction/actions-building-with-blocks/ Booty5 Actions Overview}
 *
 * @class b5.A_AttractY
 * @constructor
 * @returns {b5.A_AttractY}             The created action
 * @param target {string:b5.Actor}      Path to or instance of actor object that will attract other objects
 * @param container {b5.Actor|b5.Scene} Path to or instance of object that contains the actors (actors that can be attracted have attract property set to true)
 * @param min_y {number}                Minimum y-axis attraction range
 * @param max_y {number}                Maximum y-axis attraction range
 * @param min_x {number}                Minimum x-axis inclusion range
 * @param max_x {number}                Maximum x-axis inclusion range
 * @param strength {number}             Strength of attraction, negative for repulsion
 * @param stop {boolean}                If set to true then attracted objects will stop when they hit the min distance range
 * @param bounce {boolean}              If set to true then objects when stopped at the min distance range will bounce
 *
 */
b5.A_AttractY = function(target, container, min_y, max_y, min_x, max_x, strength, stop, bounce)
{
    this.target = target;
    this.container = container;
    this.min_y = min_y;
    this.max_y = max_y;
    this.min_x = min_x;
    this.max_x = max_x;
    this.strength = strength;
    this.stop = stop;
    this.bounce = bounce;
};
b5.A_AttractY.prototype.onTick = function()
{
    this.target = b5.Utils.resolveObject(this.target);
    this.container = b5.Utils.resolveObject(this.container);
    var target = this.target;
    var actors = this.container.actors;
    var count = actors.length;
    var x = target.x;
    var y = target.y;
    var min_y = this.min_y;
    var max_y = this.max_y;
    var min_x = this.min_x;
    var max_x = this.max_x;
    var strength = this.strength;
    var stop = this.stop;
    var bounce = this.bounce;
    for (var t = 0; t < count; t++)
    {
        var actor = actors[t];
        if (actor.attract !== undefined)
        {
            var dx = actor.x - x;
            if (dx > min_x && dx < max_x)
            {
                var dy = y - actor.y;
                if (dy < min_y && dy > -min_y)
                {
                    if (stop)
                    {
                        if (actor.y < y)
                            actor._y = y - min_y;
                        else
                        if (actor.y > y)
                            actor._y = y + min_y;
                        if (bounce)
                            actor.vy = -actor.vy;
                        else
                            actor.vy = 0;
                    }
                }
                else if (dy > min_y && dy < max_y)
                    actor.vy += strength;
                else if (dy > -max_y && dy < -min_y)
                    actor.vy -= strength;
            }
        }
    }

    return true;
};
b5.ActionsRegister.register("AttractY", function(p) { return new b5.A_AttractY(p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9]); });

/**
 * Action that pulls objects towards or repels objects away on the x and y-axis that are within a specific range, does not exit
 *
 * Created actions should be added to an actor or scenes actions list to be processed
 *
 * For a complete overview of Actions see {@link http://booty5.com/html5-game-engine/booty5-html5-game-engine-introduction/actions-building-with-blocks/ Booty5 Actions Overview}
 *
 * @class b5.A_Attract
 * @constructor
 * @returns {b5.A_Attract}              The created action
 * @param target {string:b5.Actor}      Path to or instance of actor object that will attract other objects
 * @param container {b5.Actor|b5.Scene} Path to or instance of object that contains the actors (actors that can be attracted have attract property set to true)
 * @param min_dist {number}             Minimum attraction range
 * @param max_dist {number}             Maximum attraction range
 * @param strength {number}             Strength of attraction, negative for repulsion
 * @param stop {boolean}                If set to true then attracted objects will stop when they hit the min distance range
 * @param bounce {boolean}              If set to true then objects when stopped at the min distance range will bounce
 *
 */
b5.A_Attract = function(target, container, min_dist, max_dist, strength, stop, bounce)
{
    this.target = target;
    this.container = container;
    this.min_dist = min_dist;
    this.max_dist = max_dist;
    this.strength = strength;
    this.stop = stop;
    this.bounce = bounce;
};
b5.A_Attract.prototype.onTick = function()
{
    this.target = b5.Utils.resolveObject(this.target);
    this.container = b5.Utils.resolveObject(this.container);
    var target = this.target;
    var actors = this.container.actors;
    var count = actors.length;
    var x = target.x;
    var y = target.y;
    var min_dist = this.min_dist;
    var max_dist = this.max_dist;
    var strength = this.strength;
    var stop = this.stop;
    var bounce = this.bounce;
    var d2 = Math.sqrt(min_dist);
    for (var t = 0; t < count; t++)
    {
        var actor = actors[t];
        if (actor.attract !== undefined)
        {
            var dx = actor.x - x;
            var dy = actor.y - y;
            var d = dx * dx + dy * dy;
            if (d > min_dist && d < max_dist)
            {
                d = Math.sqrt(d);
                actor.vx -= strength * dx / d;
                actor.vy -= strength * dy / d;
            }
            else
            if (d < min_dist)
            {
                d = Math.sqrt(d);
                if (stop)
                {
                    actor._x = x + d2 * dx / d;
                    actor._y = y + d2 * dy / d;
                    if (bounce)
                    {
                        actor.vx = -actor.vx;
                        actor.vy = -actor.vy;
                    }
                    else
                    {
                        actor.vx = 0;
                        actor.vy = 0;
                    }
                }

            }
        }
    }

    return true;
};
b5.ActionsRegister.register("Attract", function(p) { return new b5.A_Attract(p[1],p[2],p[3],p[4],p[5],p[6],p[7]); });

