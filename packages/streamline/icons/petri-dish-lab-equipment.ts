import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePetriDishLabEquipmentIcon],svg[streamline-petri-dish-lab-equipment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M2.529 7.664c.286-.139.994-.312 1.535.105s.554 1.146.493 1.458c-.06.312-.047 1.04.494 1.457c.54.417 1.249.244 1.535.105M8.833 6.5A1.667 1.667 0 1 0 7.32 4.137a1.25 1.25 0 1 0 .385 1.922a1.66 1.66 0 0 0 1.13.441ZM8.25 9a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m-5-3a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m7 5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlinePetriDishLabEquipmentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
