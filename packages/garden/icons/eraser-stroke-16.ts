import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEraserStroke16Icon],svg[garden-eraser-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="14.142" height="7.071" x=".929" y="4.465" rx=".5" ry=".5" transform="rotate(-45 8 8)"></svg:rect><svg:path stroke-linecap="round" d="m5.577 5.577l4.673 4.673M8.5 15.5h7"></svg:path></svg:g>`,
})
export class GardenEraserStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
