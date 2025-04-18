import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleHalfCircleSolidIcon],svg[mynaui-circle-half-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m9-5a.75.75 0 0 1 .75-.75a5.75 5.75 0 0 1 0 11.5a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiCircleHalfCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
