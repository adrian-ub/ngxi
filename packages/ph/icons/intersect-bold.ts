import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phIntersectBoldIcon],svg[ph-intersect-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 78A84 84 0 1 0 78 178A84 84 0 1 0 178 78m-22.19 22.19a59.57 59.57 0 0 1-9.81 28.9L126.94 110a59.57 59.57 0 0 1 28.9-9.84Zm-79.5 52.51a60 60 0 1 1 76.33-76.33a84.11 84.11 0 0 0-76.3 76.3Zm23.82 3.17a59.57 59.57 0 0 1 9.81-28.9L129.06 146a59.57 59.57 0 0 1-28.9 9.84ZM160 220a60.09 60.09 0 0 1-56.67-40.34a84.11 84.11 0 0 0 76.33-76.33A60 60 0 0 1 160 220"></svg:path>`,
})
export class PhIntersectBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
