import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBlocksAndArrowsIcon],svg[icon-park-outline-blocks-and-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 6H6v14h14zm0 22H6v14h14zM42 6H28v14h14zM28 28l14 14M28 28h14zm0 0v14z"></svg:path>`,
})
export class IconParkOutlineBlocksAndArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
