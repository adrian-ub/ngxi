import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCornersInIcon],svg[ph-corners-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 96V48a8 8 0 0 1 16 0v40h40a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m-56 56H48a8 8 0 0 0 0 16h40v40a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m112 0h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-40h40a8 8 0 0 0 0-16M96 40a8 8 0 0 0-8 8v40H48a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCornersInIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
