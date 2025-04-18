import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeSourceIcon],svg[mdi-volume-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9v6h4l5 5V4L7 9zm13 6h-2V9h2zm4 4h-2V5h2z"></svg:path>`,
})
export class MdiVolumeSourceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
