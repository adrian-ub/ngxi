import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightDownDuotoneIcon],svg[ph-arrow-bend-right-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 176l-48 48l-48-48Z" opacity=".2"></svg:path><svg:path d="M207.39 172.94A8 8 0 0 0 200 168h-40v-40A104.11 104.11 0 0 0 56 24a8 8 0 0 0 0 16a88.1 88.1 0 0 1 88 88v40h-40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0 1.73-8.72M152 212.69L123.31 184h57.38Z"></svg:path></svg:g>`,
})
export class PhArrowBendRightDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
