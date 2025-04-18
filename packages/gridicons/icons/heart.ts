import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsHeartIcon],svg[gridicons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3"></svg:path>`,
})
export class GridiconsHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
