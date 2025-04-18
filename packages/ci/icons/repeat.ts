import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciRepeatIcon],svg[ci-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 22l-4-4l4-4v3h10v-4h2v5a1 1 0 0 1-1 1H7v3Zm0-11H5V6a1 1 0 0 1 1-1h11V2l4 4l-4 4V7H7v4Z"></svg:path>`,
})
export class CiRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
