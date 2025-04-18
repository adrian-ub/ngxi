import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsHashnodeIcon],svg[lineicons-hashnode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.388 8.691a4.644 4.644 0 0 0 0 6.622l5.307 5.308a4.696 4.696 0 0 0 6.64 0l5.29-5.308a4.696 4.696 0 0 0 0-6.64l-5.307-5.307a4.707 4.707 0 0 0-6.623 0zm10.944 5.637a3.3 3.3 0 0 1-4.651 0a3.3 3.3 0 0 1 0-4.651a3.3 3.3 0 0 1 4.651 0a3.3 3.3 0 0 1 0 4.65"></svg:path>`,
})
export class LineiconsHashnodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
