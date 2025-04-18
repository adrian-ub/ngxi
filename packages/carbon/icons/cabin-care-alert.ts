import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCabinCareAlertIcon],svg[carbon-cabin-care-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2h2v7h-2z"></svg:path><svg:rect width="3" height="3" x="23.5" y="11" fill="currentColor" rx="1.5"></svg:rect><svg:path fill="currentColor" d="M23.822 18h-8.739L11.864 5.965a4 4 0 0 0-7.727 2.07l4.408 16.482A2 2 0 0 0 10.477 26H19v2H4v2h15a2 2 0 0 0 2-2v-2h3a4.005 4.005 0 0 0 3.98-4.4a4.12 4.12 0 0 0-4.158-3.6M24 24H10.478L6.067 7.518a2 2 0 1 1 3.864-1.035L13.547 20H24a2 2 0 0 1 0 4"></svg:path>`,
})
export class CarbonCabinCareAlertIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
