import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShapes26Icon],svg[garden-shapes-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 14a5.75 5.75 0 1 1 0 11.5a5.75 5.75 0 0 1 0-11.5M10 15a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zm3.934-13.49l5.063 9a1 1 0 0 1-.872 1.49H8a1 1 0 0 1-.872-1.49l5.063-9a1 1 0 0 1 1.743 0"></svg:path>`,
})
export class GardenShapes26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
