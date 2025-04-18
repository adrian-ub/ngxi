import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBellDotIcon],svg[proicons-bell-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.477 9.75v3.64a3 3 0 0 0 .456 1.59l1.09 1.74a1 1 0 0 1-.849 1.53H4.826a1 1 0 0 1-.848-1.53l1.088-1.74a3 3 0 0 0 .457-1.59V9.226A6.477 6.477 0 0 1 14.52 3.26"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 21.25h4"></svg:path><svg:circle cx="18.5" cy="5.5" r="2.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsBellDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
