import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFirstAidLightIcon],svg[ph-first-aid-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-50V40a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v50H40a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h50v50a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-50h50a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-56a6 6 0 0 0-6 6v56a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2v-56a6 6 0 0 0-6-6H40a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h56a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v56a6 6 0 0 0 6 6h56a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFirstAidLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
