import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBracesIcon],svg[proicons-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20.25a3 3 0 0 1-3-3v0v-1.343a4 4 0 0 0-1.172-2.829L3.75 12l1.078-1.078A4 4 0 0 0 6 8.093V6.75v0a3 3 0 0 1 3-3v0m6 16.5a3 3 0 0 0 3-3v0v-1.343a4 4 0 0 1 1.172-2.829L20.25 12l-1.078-1.078A4 4 0 0 1 18 8.093V6.75v0a3 3 0 0 0-3-3v0"></svg:path>`,
})
export class ProiconsBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
