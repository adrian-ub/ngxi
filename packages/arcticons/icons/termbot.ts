import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTermbotIcon],svg[arcticons-termbot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 8.4a4 4 0 0 0-4 4v23.2a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4V12.4a4 4 0 0 0-4-4zM9 23.13v.03l7.72 6L9 35.13m20.46 0h-11"></svg:path><svg:circle cx="28.674" cy="15.739" r="1.385" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.706 23.078l-5.183-5.184a4.264 4.264 0 0 0-7.063-4.368a4.268 4.268 0 0 0 4.998 6.8l.784.783l.481-.48l3.49 3.49l2.258.12z"></svg:path>`,
})
export class ArcticonsTermbotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
