import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenThumbsUpStroke12Icon],svg[garden-thumbs-up-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linejoin="round" d="M10.77 4.5a.73.73 0 0 1 .73.73C11.43 7 11.21 11.5 10 11.5H5a.5.5 0 0 1-.5-.5V4.5s1-.5 1-3a1 1 0 0 1 2 0v3z"></svg:path><svg:rect width="2" height="7" x=".5" y="4.5" rx=".5" ry=".5"></svg:rect></svg:g>`,
})
export class GardenThumbsUpStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
