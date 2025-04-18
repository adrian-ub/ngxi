import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCheckBoxStroke12Icon],svg[garden-check-box-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="11" height="11" x=".5" y=".5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3 6.5l2 2l4-4"></svg:path></svg:g>`,
})
export class GardenCheckBoxStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
