import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronBoxStroke12Icon],svg[garden-chevron-box-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="11" height="9" x=".5" y="1.5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" d="m3.5 5l2.15 2.15a.5.5 0 0 0 .71 0L8.5 5"></svg:path></svg:g>`,
})
export class GardenChevronBoxStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
