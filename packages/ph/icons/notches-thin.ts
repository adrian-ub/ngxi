import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotchesThinIcon],svg[ph-notches-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 130.83l-80 80a4 4 0 1 1-5.66-5.66l80-80a4 4 0 1 1 5.66 5.66m-16-93.66a4 4 0 0 0-5.66 0l-152 152a4 4 0 0 0 5.66 5.66l152-152a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhNotchesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
