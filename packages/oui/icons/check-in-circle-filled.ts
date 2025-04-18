import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiCheckInCircleFilledIcon],svg[oui-check-in-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m3.65-10.857L6.91 9.8L4.35 7.286a.5.5 0 0 0-.7.714l2.909 2.857a.5.5 0 0 0 .7 0l5.091-5a.5.5 0 1 0-.7-.714"></svg:path>`,
})
export class OuiCheckInCircleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
