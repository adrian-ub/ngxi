import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMouseSelectFilledIcon],svg[ix-mouse-select-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m62.226 62.127l364.44 103.206l-88.062 86.711l92.648 92.642l-86.547 86.549l-92.618-92.642l-86.754 88.074z"></svg:path>`,
})
export class IxMouseSelectFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
