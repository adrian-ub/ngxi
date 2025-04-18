import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenThumbsUpStroke16Icon],svg[garden-thumbs-up-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linejoin="round" d="M14.5 6.5a1 1 0 0 1 1 1c-.1 2.4-.4 8-2 8H5a.47.47 0 0 1-.5-.5V6.9a.55.55 0 0 1 .3-.5c.6-.2 1.7-1 1.7-4.4a1.5 1.5 0 0 1 3 0v4.5z"></svg:path><svg:rect width="2" height="9" x=".5" y="6.5" rx=".5" ry=".5"></svg:rect></svg:g>`,
})
export class GardenThumbsUpStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
