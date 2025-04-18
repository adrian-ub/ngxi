import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineYuanIcon],svg[streamline-yuan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5.5l4.5 6l4.5-6M7 6.5v7m-3.5-3h7m-7-2h7"></svg:path>`,
})
export class StreamlineYuanIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
