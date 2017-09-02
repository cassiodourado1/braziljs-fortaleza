/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts" />


@component("brasil-js")
class BrasilJs extends polymer.Base {

    @property({ type: String })
    private edition: string;

    @property({ type: String })
    private year: string;

    constructor() { 

        super();

    }

}

BrasilJs.register();
