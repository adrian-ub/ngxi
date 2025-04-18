import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siRemoveFromLibraryFillIcon],svg[si-remove-from-library-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.6 2H8.4A2.4 2.4 0 0 0 6 4.4v11.2A2.4 2.4 0 0 0 8.4 18h11.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 19.6 2M10 9a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3 3a1 1 0 0 1 1 1v11.6C4 18.028 5.972 20 8.4 20H20a1 1 0 1 1 0 2H8.4A6.403 6.403 0 0 1 2 15.6V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class SiRemoveFromLibraryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
