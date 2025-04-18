import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsTrashSolidIcon],svg[rivet-icons-trash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0h6v3h5v2h-1.165l-1.553 8.537A3 3 0 0 1 10.332 16H5.669a3 3 0 0 1-2.951-2.463L1.165 5H0V3h5zm2 3h2V2H7zm0 4v5h2V7z"></svg:path>`,
})
export class RivetIconsTrashSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
