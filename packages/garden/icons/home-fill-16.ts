import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHomeFill16Icon],svg[garden-home-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16h-2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v5a.5.5 0 0 1-.5.5H3a1 1 0 0 1-1-1V9h-.953a1.04 1.04 0 0 1-.972-.63a.96.96 0 0 1 .213-1.058L7.293.3a1 1 0 0 1 1.414 0l7.004 7.01a.96.96 0 0 1 .214 1.06a1.04 1.04 0 0 1-.972.63H14v6a1 1 0 0 1-1 1"></svg:path>`,
})
export class GardenHomeFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
