import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherVideoIcon],svg[feather-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m23 7l-7 5l7 5z"></svg:path><svg:rect width="15" height="14" x="1" y="5" rx="2" ry="2"></svg:rect></svg:g>`,
})
export class FeatherVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
