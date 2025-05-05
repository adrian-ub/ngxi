import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPostIcon],svg[picon-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1V0h1v1M3 8V5h1v3M1 4V2h5l1 1l-1 1"></svg:path>`,
})
export class PiconPostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
