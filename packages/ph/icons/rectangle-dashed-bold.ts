import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRectangleDashedBoldIcon],svg[ph-rectangle-dashed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 48a12 12 0 0 1-12 12H44v12a12 12 0 0 1-24 0V56a20 20 0 0 1 20-20h32a12 12 0 0 1 12 12M32 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m40 40H44v-12a12 12 0 0 0-24 0v16a20 20 0 0 0 20 20h32a12 12 0 0 0 0-24m72 0h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m80-24a12 12 0 0 0-12 12v12h-28a12 12 0 0 0 0 24h32a20 20 0 0 0 20-20v-16a12 12 0 0 0-12-12m0-72a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m-8-64h-32a12 12 0 0 0 0 24h28v12a12 12 0 0 0 24 0V56a20 20 0 0 0-20-20m-72 0h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhRectangleDashedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
