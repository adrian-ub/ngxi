import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSignpostStroke16Icon],svg[garden-signpost-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.293 9.5H2a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h10.293a.5.5 0 0 1 .354.146l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 0 1-.354.147z"></svg:path><svg:path fill="currentColor" d="M7 0h2v2H7zm0 11h2v5H7z"></svg:path>`,
})
export class GardenSignpostStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
