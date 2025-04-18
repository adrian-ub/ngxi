import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsLayersIcon],svg[humbleicons-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="m4 8l8-4l8 4l-8 4z"></svg:path><svg:path stroke-linecap="round" d="m4 12l8 4l8-4M4 16l8 4l8-4"></svg:path></svg:g>`,
})
export class HumbleiconsLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
