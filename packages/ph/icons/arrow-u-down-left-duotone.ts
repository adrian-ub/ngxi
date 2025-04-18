import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownLeftDuotoneIcon],svg[ph-arrow-u-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 120v96l-48-48Z" opacity=".2"></svg:path><svg:path d="M168 48H80a8 8 0 0 0 0 16h88a48 48 0 0 1 0 96H88v-40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 216v-40h80a64 64 0 0 0 0-128M72 196.69L43.31 168L72 139.31Z"></svg:path></svg:g>`,
})
export class PhArrowUDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
