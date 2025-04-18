import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsYcombinatorIcon],svg[lineicons-ycombinator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9.61 10.22v3.716h-1.19v-3.717L8.283 7.384h1.422l2.323 4.732c.03-.203 2.38-4.703 2.38-4.703h1.307z"></svg:path>`,
})
export class LineiconsYcombinatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
