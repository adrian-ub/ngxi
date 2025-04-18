import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMoveInIcon],svg[icon-park-outline-move-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m20 12l4 4l4-4m-4 4V4m-4 32l4-4l4 4m-4-4v12m12-24l-4 4l4 4m-4-4h12m-32-4l4 4l-4 4m4-4H4m20 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class IconParkOutlineMoveInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
