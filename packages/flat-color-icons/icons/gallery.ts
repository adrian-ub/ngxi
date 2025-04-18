import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsGalleryIcon],svg[flat-color-icons-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E65100" d="M41 42H13c-2.2 0-4-1.8-4-4V18c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#F57C00" d="M35 36H7c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4"></svg:path><svg:circle cx="30" cy="16" r="3" fill="#FFF9C4"></svg:circle><svg:path fill="#942A09" d="M17 17.9L8 31h18z"></svg:path><svg:path fill="#BF360C" d="M28 23.5L22 31h12z"></svg:path>`,
})
export class FlatColorIconsGalleryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
