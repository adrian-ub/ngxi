import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAccessibilitySignIcon],svg[iconoir-accessibility-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11.5 12.5l7-.5l-1.5 6.5m-5.5-6l4.5-5L12.5 5L10 7.5m8.5-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M5.5 12.5a5 5 0 0 1 7.584 6M3.729 15A5 5 0 0 0 11 20.831"></svg:path></svg:g>`,
})
export class IconoirAccessibilitySignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
