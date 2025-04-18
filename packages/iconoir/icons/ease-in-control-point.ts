import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEaseInControlPointIcon],svg[iconoir-ease-in-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20c8 0 18-16 18-16m-4 16a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 0h-2m-3 0h-2"></svg:path>`,
})
export class IconoirEaseInControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
