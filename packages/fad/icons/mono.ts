import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadMonoIcon],svg[fad-mono-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M127 210c-44.735 0-81-36.265-81-81s36.265-81 81-81s81 36.265 81 81s-36.265 81-81 81m1-21c34.794 0 63-27.087 63-60.5S162.794 68 128 68s-63 27.087-63 60.5S93.206 189 128 189"></svg:path>`,
})
export class FadMonoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
