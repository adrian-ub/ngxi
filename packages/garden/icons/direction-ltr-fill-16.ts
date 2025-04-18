import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDirectionLtrFill16Icon],svg[garden-direction-ltr-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a4 4 0 0 0 0 8h.5V0zm6 15.5v-6a.5.5 0 0 1 .854-.354l2.646 2.647a1 1 0 0 1 0 1.414l-2.646 2.646A.5.5 0 0 1 12 15.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M14.5 12.5H.5m6-2V.5H8a.5.5 0 0 1 .5.5v9.5"></svg:path>`,
})
export class GardenDirectionLtrFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
