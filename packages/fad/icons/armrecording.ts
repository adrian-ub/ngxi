import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadArmrecordingIcon],svg[fad-armrecording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="127" cy="129" r="81" fill="currentColor" fill-rule="evenodd"></svg:circle>`,
})
export class FadArmrecordingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
