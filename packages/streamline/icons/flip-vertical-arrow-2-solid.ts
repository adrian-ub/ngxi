import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlipVerticalArrow2SolidIcon],svg[streamline-flip-vertical-arrow-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.853.854l3.793 3.792a.5.5 0 0 0 .708 0L11.146.854A.5.5 0 0 0 10.793 0H3.207a.5.5 0 0 0-.353.854Zm0 12.292l3.793-3.793a.5.5 0 0 1 .708 0l3.792 3.793a.5.5 0 0 1-.353.854H3.207a.5.5 0 0 1-.353-.854ZM1.75 7.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 1 1 0 1.5m2.833 0h1a.75.75 0 1 0 0-1.5h-1a.75.75 0 0 0 0 1.5m4.834 0h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 0 1 0 1.5m2.833 0h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFlipVerticalArrow2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
