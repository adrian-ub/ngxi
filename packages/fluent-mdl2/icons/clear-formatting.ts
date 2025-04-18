import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ClearFormattingIcon],svg[fluent-mdl2-clear-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1243 1920h421v128H677l-248-248q-27-27-41-62t-15-74q0-38 14-73t42-63l435-435l-65-197H353l-85 256H128L512 0h128l329 988l375-374l602 602zM756 768L576 228L396 768zm588 26l-550 550l422 422l550-550zm-283 1126l65-64l-422-422l-184 185q-19 19-19 45t19 45l211 211z"></svg:path>`,
})
export class FluentMdl2ClearFormattingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
