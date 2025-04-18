import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAnnotationVisibilityIcon],svg[carbon-annotation-visibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 22H4V6h24z" fill="currentColor"></svg:path><svg:path d="M21 20h-8a3.51 3.51 0 0 0-.88-1.86l3.8-6.64l-1.74-1l-3.78 6.62a3.35 3.35 0 0 0-.9-.12a3.5 3.5 0 1 0 3.15 5H21zM9.5 22a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 9.5 22z" fill="currentColor"></svg:path><svg:path d="M19 8h7v2h-7z" fill="currentColor"></svg:path><svg:path d="M19 12h4v2h-4z" fill="currentColor"></svg:path>`,
})
export class CarbonAnnotationVisibilityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
