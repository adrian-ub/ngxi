import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8DownArrowIcon],svg[icons8-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v20.063L8.22 17.28l-1.44 1.44l8.5 8.5l.72.686l.72-.687l8.5-8.5l-1.44-1.44L17 24.063V4z"></svg:path>`,
})
export class Icons8DownArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
