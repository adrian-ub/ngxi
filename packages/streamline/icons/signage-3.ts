import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignage3Icon],svg[streamline-signage-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 2.5h-7l-3 11h7zm3 11l-3-11m-2.18 8h4.36"></svg:path>`,
})
export class StreamlineSignage3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
