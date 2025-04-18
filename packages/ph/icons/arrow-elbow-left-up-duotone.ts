import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftUpDuotoneIcon],svg[ph-arrow-elbow-left-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 96H40l48-48Z" opacity=".2"></svg:path><svg:path d="M232 184H96v-80h40a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 40 104h40v88a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16M88 59.31L116.69 88H59.31Z"></svg:path></svg:g>`,
})
export class PhArrowElbowLeftUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
