import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHardDrivesBoldIcon],svg[ph-hard-drives-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v56H52V60ZM52 196v-56h152v56ZM160 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 80a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhHardDrivesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
