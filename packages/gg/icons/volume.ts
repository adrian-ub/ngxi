import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggVolumeIcon],svg[gg-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 12a8 8 0 0 1-8 8v-2a6 6 0 0 0 0-12V4a8 8 0 0 1 8 8"></svg:path><svg:path d="M20 12a4 4 0 0 1-4 4v-2a2 2 0 1 0 0-4V8a4 4 0 0 1 4 4"></svg:path><svg:path fill-rule="evenodd" d="m9 16l6 4V4L9 8H5a4 4 0 1 0 0 8zm-4-6h4l4-2.5v9L9 14H5a2 2 0 1 1 0-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
