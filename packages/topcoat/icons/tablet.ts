import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatTabletIcon],svg[topcoat-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.5 4.5c0-2.38-.5-3-3-3h-25c-2.5 0-3 .561-3 3v34c0 2.41.561 3 3 3h25c2.471 0 3-.561 3-3zm-26 2h21v27h-21zm14 32h-7v-2h7z"></svg:path>`,
})
export class TopcoatTabletIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
