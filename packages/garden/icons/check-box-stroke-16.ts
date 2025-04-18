import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCheckBoxStroke16Icon],svg[garden-check-box-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="13" height="13" x="1.5" y="1.5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 8.5L7 11l5-5"></svg:path></svg:g>`,
})
export class GardenCheckBoxStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
