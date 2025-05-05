import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWikipediaIcon],svg[picon-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 6l2-4h1L5 7L2 2h1m0 4l2-4h1L3 7L0 2h1"></svg:path>`,
})
export class PiconWikipediaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
