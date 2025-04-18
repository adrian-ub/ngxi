import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronBoxStroke16Icon],svg[garden-chevron-box-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="15" height="13" x=".5" y="1.5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" d="m4 6.5l3.65 3.65a.5.5 0 0 0 .71 0L12 6.5"></svg:path></svg:g>`,
})
export class GardenChevronBoxStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
