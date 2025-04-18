import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppwashIcon],svg[arcticons-appwash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="39.7" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 4.5h-25a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3h25a3 3 0 0 0 3-3v-33a3 3 0 0 0-3-3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.4 8.1H13.6c-.8 0-1.5.6-1.5 1.4v24.9c0 .8.7 1.4 1.5 1.4h20.7c.8 0 1.5-.6 1.5-1.4V9.6c.1-.8-.6-1.5-1.4-1.5"></svg:path><svg:circle cx="24" cy="24" r="8.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="5.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.8 24.2c5.9-2.3 4.4 1.2 10.2.6"></svg:path><svg:circle cx="30.7" cy="10.9" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33" cy="10.9" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsAppwashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
