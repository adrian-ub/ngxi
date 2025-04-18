import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownRightDuotoneIcon],svg[ph-arrow-bend-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 152l-48 48v-96Z" opacity=".2"></svg:path><svg:path d="m229.66 146.34l-48-48A8 8 0 0 0 168 104v40h-40a88.1 88.1 0 0 1-88-88a8 8 0 0 0-16 0a104.11 104.11 0 0 0 104 104h40v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 180.69v-57.38L212.69 152Z"></svg:path></svg:g>`,
})
export class PhArrowBendDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
