import * as assert from 'assert';

import * as vscode from 'vscode';
import * as extention from '../src/extension';

void vscode;
void extention;

suite("Extension Tests", () => {
    test("Something 1", () => {
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
    });
});
