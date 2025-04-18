import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeIndesignIcon],svg[iconoir-adobe-indesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4M8.5 8v8"></svg:path><svg:path d="M15.5 12v3.4a.6.6 0 0 1-.6.6h-1.4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2zm0 0V9"></svg:path></svg:g>`,
})
export class IconoirAdobeIndesignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
