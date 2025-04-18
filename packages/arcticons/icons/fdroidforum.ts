import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFdroidforumIcon],svg[arcticons-fdroidforum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.99" cy="15.18" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.01" cy="15.18" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="31.32" height="12.99" x="8.35" y="8.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.8"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.83L9.16 9.5M42.5 5.85l-3.66 3.67m.043 32.459L22.99 37.374l-11.841-.167a2.794 2.794 0 0 1-2.8-2.8V27.47a2.794 2.794 0 0 1 2.8-2.8h25.72a2.794 2.794 0 0 1 2.8 2.8v7.105a2.794 2.794 0 0 1-2.8 2.8h-1.705Z"></svg:path>`,
})
export class ArcticonsFdroidforumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
