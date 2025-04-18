import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPastebinIcon],svg[arcticons-pastebin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.37 10.35H7a2.48 2.48 0 0 0-2.5 2.48v22.34a2.5 2.5 0 0 0 5 0v-6.83h3.89c5.74 0 9-3.28 9-9s-3.28-8.99-9.02-8.99m0 13H9.48v-8h3.89c3 0 4.05 1.09 4.05 4s-1.1 4.01-4.05 4.01Zm21.1-3.69h-3.89v-.45a2.5 2.5 0 0 0-5 0v16a2.48 2.48 0 0 0 2.48 2.48h6.39c5.74 0 9-3.27 9-9s-3.24-9.03-8.98-9.03m0 13h-3.89v-8h3.89c3 0 4.05 1.08 4.05 4s-1.1 4.01-4.05 4.01Z"></svg:path><svg:circle cx="28.08" cy="12.83" r="2.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPastebinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
