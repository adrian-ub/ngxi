import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsHeartSolidIcon],svg[rivet-icons-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="2" d="M13.745 7.886L8 13.632L2.255 7.886a3.375 3.375 0 0 1 4.773-4.772l.265.265l.707.707l.707-.707l.265-.265a3.375 3.375 0 1 1 4.773 4.772Z"></svg:path>`,
})
export class RivetIconsHeartSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
