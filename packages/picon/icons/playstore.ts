import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPlaystoreIcon],svg[picon-playstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5L5.5 4L7 3l1 1M6 5L0 8l5-3.5m0-1L0 0l6 3M0 8V0l4 4"></svg:path>`,
})
export class PiconPlaystoreIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
