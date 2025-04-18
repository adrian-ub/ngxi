import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChopsticksIcon],svg[fluent-mdl2-chopsticks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 709q0 26-19 45t-45 19H768v379h832q26 0 45 19t19 45q0 115-29 221t-84 199t-130 168t-168 130t-199 84t-222 30q-115 0-221-29t-199-84t-168-130t-130-168t-84-199t-30-222q0-26 19-45t45-19h576V773H512v187q0 26-19 45t-45 19t-45-19t-19-45V773H192q-26 0-45-19t-19-45t19-45t45-19h192V489l-40 8q-25 5-52 10t-51 9t-38 4q-26 0-45-19t-19-45q0-23 15-41t38-22l1659-292q4-1 11-1q26 0 45 19t19 45q0 23-15 41t-38 22L768 422v223h1088q26 0 45 19t19 45M832 1920q136 0 258-49t216-135t155-203t72-253H131q12 136 72 253t154 203t217 135t258 49M512 645h128V444l-128 23z"></svg:path>`,
})
export class FluentMdl2ChopsticksIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
