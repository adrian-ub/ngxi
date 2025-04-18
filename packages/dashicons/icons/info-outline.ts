import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsInfoOutlineIcon],svg[dashicons-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15h2V9H9zm1-10c-.5 0-1 .5-1 1s.5 1 1 1s1-.5 1-1s-.5-1-1-1m0-4c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7"></svg:path>`,
})
export class DashiconsInfoOutlineIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
