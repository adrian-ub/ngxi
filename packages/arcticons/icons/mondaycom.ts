import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMondaycomIcon],svg[arcticons-mondaycom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="39.038" cy="30.84" r="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.75 12.763a4.5 4.5 0 0 0-2.827 1.97L5.171 28.415a4.5 4.5 0 0 0 7.582 4.851v-.001l8.752-13.682a4.5 4.5 0 0 0-1.364-6.216l-.001-.001a4.5 4.5 0 0 0-3.39-.603m15.036 0a4.5 4.5 0 0 0-2.824 1.97L20.21 28.415a4.5 4.5 0 0 0 7.58 4.85l8.754-13.682a4.5 4.5 0 0 0-1.365-6.216l-.002-.001a4.5 4.5 0 0 0-3.39-.604"></svg:path>`,
})
export class ArcticonsMondaycomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
