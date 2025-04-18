import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSmileyStroke12Icon],svg[garden-smiley-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="6" cy="6" r="5.5"></svg:circle><svg:path stroke-linecap="round" d="M3.5 7.5C4 8.4 4.9 9 6 9s2-.6 2.5-1.5"></svg:path></svg:g><svg:g fill="currentColor"><svg:circle cx="4" cy="5" r="1"></svg:circle><svg:circle cx="8" cy="5" r="1"></svg:circle></svg:g>`,
})
export class GardenSmileyStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
