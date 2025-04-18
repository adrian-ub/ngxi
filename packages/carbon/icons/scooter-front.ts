import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonScooterFrontIcon],svg[carbon-scooter-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M23 10V8h-3a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2H9v2h3v4.184A3 3 0 0 0 10 17v7h2v-7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7h2v-7a3 3 0 0 0-2-2.816V10Zm-5-2v6h-4V8Z"></svg:path>`,
})
export class CarbonScooterFrontIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
