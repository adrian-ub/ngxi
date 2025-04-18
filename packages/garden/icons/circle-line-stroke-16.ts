import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCircleLineStroke16Icon],svg[garden-circle-line-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14a6 6 0 0 0 5.658-4l1.052.001a7.003 7.003 0 0 1-13.42 0h1.052A6 6 0 0 0 8 14m7-7a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zM8 1a7 7 0 0 1 6.71 5h-1.05A6.002 6.002 0 0 0 2.34 6H1.29C2.15 3.108 4.829 1 8 1"></svg:path>`,
})
export class GardenCircleLineStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
