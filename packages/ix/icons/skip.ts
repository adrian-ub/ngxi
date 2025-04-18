import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSkipIcon],svg[ix-skip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 128v256H384V128zM128 128v256l213.333-128zm42.667 75.328L258.432 256l-87.765 52.65z"></svg:path>`,
})
export class IxSkipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
