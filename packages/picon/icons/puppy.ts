import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPuppyIcon],svg[picon-puppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5L4 7L3 5l1-1m1-1V2h1v1M3 3H2V2h1m4 1L5 0h3M3 7h2l2-4l-2 5H3L1 3m0 0L0 0h3"></svg:path>`,
})
export class PiconPuppyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
