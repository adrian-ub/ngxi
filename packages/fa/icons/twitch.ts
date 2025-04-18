import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faTwitchIcon],svg[fa-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 434v434H655V434zm398 0v434h-145V434zm0 760l253-254V145H257v1049h326v217l217-217zM1596 0v1013l-434 434H836l-217 217H402v-217H4V289L113 0z"></svg:path>`,
})
export class FaTwitchIcon {
  readonly viewBox = input("0 0 1600 1664")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
