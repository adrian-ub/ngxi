import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleBoldIcon],svg[ph-trash-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24m-28 156H68V72h120ZM76 20A12 12 0 0 1 88 8h80a12 12 0 0 1 0 24H88a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhTrashSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
