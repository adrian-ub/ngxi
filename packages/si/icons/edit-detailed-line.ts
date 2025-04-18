import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedLineIcon],svg[si-edit-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14.828 6.343l2.829 2.829m.566-5.092l1.697 1.697a.8.8 0 0 1 0 1.132L8.464 18.364l-3.535.707l.707-3.536L17.091 4.08a.8.8 0 0 1 1.132 0"></svg:path>`,
})
export class SiEditDetailedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
