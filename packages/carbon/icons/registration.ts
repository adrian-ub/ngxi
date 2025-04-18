import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRegistrationIcon],svg[carbon-registration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 25h-8a2.003 2.003 0 0 1-2-2v-3h2v3h8V9h-8v3h-2V9a2.002 2.002 0 0 1 2-2h8a2.002 2.002 0 0 1 2 2v14a2.003 2.003 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M8 15h4v2H8z" fill="currentColor"></svg:path><svg:path d="M20 15h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M14 15h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M12 25H4a2.002 2.002 0 0 1-2-2V9a2.002 2.002 0 0 1 2-2h8a2.002 2.002 0 0 1 2 2v3h-2V9H4v14h8v-3h2v3a2.002 2.002 0 0 1-2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonRegistrationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
