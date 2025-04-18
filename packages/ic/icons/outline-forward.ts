import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineForwardIcon],svg[ic-outline-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.83L17.17 12L14 15.17V14H6v-4h8zM12 4v4H4v8h8v4l8-8z"></svg:path>`,
})
export class IcOutlineForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
