import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSmileyStroke16Icon],svg[garden-smiley-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="8" cy="8" r="7.5"></svg:circle><svg:path stroke-linecap="round" d="M4 9c.4 1.7 2.1 3 4 3s3.6-1.3 4-3"></svg:path></svg:g><svg:g fill="currentColor"><svg:circle cx="6" cy="6" r="1"></svg:circle><svg:circle cx="10" cy="6" r="1"></svg:circle></svg:g>`,
})
export class GardenSmileyStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
