import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwAdobeIcon],svg[uiw-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 1v18.001L12.607 1zM7.399 1L0 19.001V1zm2.604 6.265L14.713 19h-3.086l-1.41-3.419H6.77z"></svg:path>`,
})
export class UiwAdobeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
