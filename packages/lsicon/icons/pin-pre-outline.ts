import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPinPreOutlineIcon],svg[lsicon-pin-pre-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m3.159 7.348l5.657 5.657m-2.829-2.828l-3.535 3.535M9.877 2.737l3.535 3.536l-1.331.094l-4.333 5.57l-3.536-3.535L9.781 4.07z"></svg:path>`,
})
export class LsiconPinPreOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
