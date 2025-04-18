import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonHeartOffThinIcon],svg[iconamoon-heart-off-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M5.546 5.546q-.325.233-.617.525a5 5 0 0 0 0 7.071l5.657 5.657a2 2 0 0 0 2.828 0l2.693-2.692M10.89 5.233c.398.22.772.5 1.11.838a5 5 0 0 1 7.071 7.071l-.136.136"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonHeartOffThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
