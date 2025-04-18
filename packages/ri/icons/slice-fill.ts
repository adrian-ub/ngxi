import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSliceFillIcon],svg[ri-slice-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.768 12.229l2.121 2.121c-4.596 4.596-10.253 6.01-13.788 5.303L17.657 4.097l2.121 2.121z"></svg:path>`,
})
export class RiSliceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
