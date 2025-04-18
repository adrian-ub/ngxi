import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsWineGlassIcon],svg[akar-icons-wine-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13c6 0 8-4.477 8-10H4c0 5.523 2 10 8 10m0 0v7M5 8h14M8 22h8l-4-2z"></svg:path>`,
})
export class AkarIconsWineGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
