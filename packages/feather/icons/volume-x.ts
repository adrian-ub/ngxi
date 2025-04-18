import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherVolumeXIcon],svg[feather-volume-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5L6 9H2v6h4l5 4zm12 4l-6 6m0-6l6 6"></svg:path>`,
})
export class FeatherVolumeXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
