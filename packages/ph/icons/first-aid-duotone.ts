import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFirstAidDuotoneIcon],svg[ph-first-aid-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 104v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56H40a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56V40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 88h-48V40a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v48H40a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-56a8 8 0 0 0-8 8v56h-48v-56a8 8 0 0 0-8-8H40v-48h56a8 8 0 0 0 8-8V40h48v56a8 8 0 0 0 8 8h56Z"></svg:path></svg:g>`,
})
export class PhFirstAidDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
