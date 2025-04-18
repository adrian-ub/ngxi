import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingThreeIcon],svg[mynaui-heading-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 4.5v15m9.5-15v15M3.75 12h9.5M16 9.5h5l-3.5 4.507c2 0 3.5 1.001 3.5 3.004c0 2.744-3.408 3.206-5 1.452"></svg:path>`,
})
export class MynauiHeadingThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
