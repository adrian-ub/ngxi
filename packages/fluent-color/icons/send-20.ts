import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSend20Icon],svg[fluent-color-send-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSend202)" d="M11.5 9.5a.5.5 0 0 1 0 1l-8.122 1.767L3.983 10l-.605-2.268z"></svg:path><svg:path fill="url(#fluentColorSend200)" d="M2.724 2.053a.5.5 0 0 0-.707.576l1.498 5.618a.5.5 0 0 0 .4.364l6.855 1.142c.279.047.279.447 0 .494l-6.854 1.142a.5.5 0 0 0-.401.364l-1.498 5.618a.5.5 0 0 0 .707.576l15-7.5a.5.5 0 0 0 0-.894z"></svg:path><svg:path fill="url(#fluentColorSend201)" d="M2.724 2.053a.5.5 0 0 0-.707.576l1.498 5.618a.5.5 0 0 0 .4.364l6.855 1.142c.279.047.279.447 0 .494l-6.854 1.142a.5.5 0 0 0-.401.364l-1.498 5.618a.5.5 0 0 0 .707.576l15-7.5a.5.5 0 0 0 0-.894z"></svg:path><svg:defs><svg:lineargradient id="fluentColorSend200" x1="2" x2="15.703" y1="-4.5" y2="13.708" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3BD5FF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorSend201" x1="10" x2="14.161" y1="6.313" y2="17.571" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#DCF8FF" stop-opacity="0"></svg:stop><svg:stop offset=".769" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorSend202" cx="0" cy="0" r="1" gradientTransform="matrix(7 0 0 .9275 1.5 10)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorSend20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
