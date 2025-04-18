import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSkipForwardMiniFillIcon],svg[ri-skip-forward-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.788 17.444A.5.5 0 0 1 7 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816zM16 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0z"></svg:path>`,
})
export class RiSkipForwardMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
