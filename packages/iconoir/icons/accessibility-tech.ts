import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAccessibilityTechIcon],svg[iconoir-accessibility-tech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12.5 12.16l4-.16l-.5 4.5M11.833 12L13.5 9.538L10.833 8L9.5 9.846"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 7.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.5 18a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path></svg:g>`,
})
export class IconoirAccessibilityTechIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
