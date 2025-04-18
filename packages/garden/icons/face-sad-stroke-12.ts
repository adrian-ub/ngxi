import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFaceSadStroke12Icon],svg[garden-face-sad-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.257 3.937a.5.5 0 0 0 .194-.68C8.332 7.168 7.25 6.5 6 6.5s-2.332.668-2.937 1.757a.5.5 0 0 0 .874.486C4.37 7.964 5.122 7.5 6 7.5s1.63.464 2.063 1.243a.5.5 0 0 0 .68.194M0 6a6 6 0 1 0 12 0A6 6 0 0 0 0 6m11 0A5 5 0 1 1 1 6a5 5 0 0 1 10 0"></svg:path>`,
})
export class GardenFaceSadStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
