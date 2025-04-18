import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownRightDuotoneIcon],svg[ph-arrow-u-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 168l-48 48v-96Z" opacity=".2"></svg:path><svg:path d="m229.66 162.34l-48-48A8 8 0 0 0 168 120v40H88a48 48 0 0 1 0-96h88a8 8 0 0 0 0-16H88a64 64 0 0 0 0 128h80v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 196.69v-57.38L212.69 168Z"></svg:path></svg:g>`,
})
export class PhArrowUDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
