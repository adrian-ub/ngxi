import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTableRowDeleteIcon],svg[dashicons-table-row-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.728 11.456L14.592 8.32l3.2-3.2l-1.536-1.536l-3.2 3.2L9.92 3.648L8.384 5.12l3.2 3.2l-3.264 3.264l1.536 1.536l3.264-3.264l3.136 3.136zM0 17.92V0h20.48v17.92zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2z"></svg:path>`,
})
export class DashiconsTableRowDeleteIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
