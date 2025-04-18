import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDirectionLtrFill12Icon],svg[garden-direction-ltr-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 12a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .854-.353L11.5 8.793a1 1 0 0 1 0 1.414l-1.646 1.646A.5.5 0 0 1 9.5 12M4 0a2.5 2.5 0 0 0 0 5h.5V0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M6.5 7.5V1A.5.5 0 0 0 6 .5H4.5v7m6 2H.5"></svg:path>`,
})
export class GardenDirectionLtrFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
