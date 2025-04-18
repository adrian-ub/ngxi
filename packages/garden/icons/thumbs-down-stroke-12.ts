import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenThumbsDownStroke12Icon],svg[garden-thumbs-down-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M1.23 7.5a.73.73 0 0 1-.73-.73C.57 5 .79.5 2 .5h5a.5.5 0 0 1 .5.5v6.5s-1 .5-1 3a1 1 0 0 1-2 0v-3z"></svg:path><svg:rect width="2" height="7" x="9.5" y=".5" rx=".5" ry=".5"></svg:rect></svg:g>`,
})
export class GardenThumbsDownStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
