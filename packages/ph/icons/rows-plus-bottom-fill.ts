import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusBottomFillIcon],svg[ph-rows-plus-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128v24a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16-88H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-56 168h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhRowsPlusBottomFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
