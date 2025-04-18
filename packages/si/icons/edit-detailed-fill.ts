import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedFillIcon],svg[si-edit-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.738 3.727a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838l-1.909 1.91l-3.536-3.536zm-7.92 14.991a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .137-.256l8.838-8.839l3.536 3.536z"></svg:path>`,
})
export class SiEditDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
