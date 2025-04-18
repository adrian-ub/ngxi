import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEaseOutControlPointIcon],svg[iconoir-ease-out-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20S13 4 21 4M7 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0h2m5 0h-2"></svg:path>`,
})
export class IconoirEaseOutControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
