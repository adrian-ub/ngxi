import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsUtensilsIcon],svg[akar-icons-utensils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 8V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4m4 8V2h3a4 4 0 0 1 4 4v10h-4m-3 0v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5M5 12v9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-9M5 6V2m3 4V2"></svg:path>`,
})
export class AkarIconsUtensilsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
