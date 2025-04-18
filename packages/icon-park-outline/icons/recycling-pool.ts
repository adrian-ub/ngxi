import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRecyclingPoolIcon],svg[icon-park-outline-recycling-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m20 16l4 4l4-4m4 13l4 4l4-4M8 29l4 4l4-4m8-9V4"></svg:path><svg:path d="M36 32.867v-13.23a4 4 0 0 1 4-4h4m-32 17.23v-13.23a4 4 0 0 0-4-4H4M4 36v4a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4v-4"></svg:path></svg:g>`,
})
export class IconParkOutlineRecyclingPoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
