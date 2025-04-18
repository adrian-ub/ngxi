import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7CheckmarkAltCircleFillIcon],svg[f7-checkmark-alt-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28 52C14.745 52 4 41.255 4 28S14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24m10.788-32.07a1.714 1.714 0 0 0-2.425 0L25.43 30.867a1.716 1.716 0 0 1-2.425 0l-3.22-3.221a1.714 1.714 0 0 0-2.425 2.424l5.645 5.645c.67.67 1.755.67 2.425 0l13.359-13.359c.67-.67.67-1.755 0-2.424"></svg:path>`,
})
export class F7CheckmarkAltCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
