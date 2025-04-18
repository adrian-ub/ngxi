import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMinusCircleSolidIcon],svg[mynaui-minus-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.25-.75a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiMinusCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
