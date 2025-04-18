import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsVolumeOffIcon],svg[humbleicons-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M7 9H4v6h3l5 4V5z"></svg:path><svg:path stroke-linecap="round" d="m16 9.5l5 5m0-5l-5 5"></svg:path></svg:g>`,
})
export class HumbleiconsVolumeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
