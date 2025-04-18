import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerImageInPictureIcon],svg[tabler-image-in-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 15c-2 0-5 1-5 5"></svg:path><svg:path d="M4 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0-6V5a1 1 0 0 1 1-1h2m4 0h2m4 0h2a1 1 0 0 1 1 1v2m0 4v2m0 4v2a1 1 0 0 1-1 1h-2"></svg:path></svg:g>`,
})
export class TablerImageInPictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
