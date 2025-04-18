import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSyncIcon],svg[grommet-icons-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5 19h11a7 7 0 0 0 7-7V9M8 15l-4 4l4 4M19 5H8a7 7 0 0 0-7 7v3M16 1l4 4l-4 4"></svg:path>`,
})
export class GrommetIconsSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
