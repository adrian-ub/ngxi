import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilTriangleUpIcon],svg[il-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 287H0l116-116z"></svg:path>`,
})
export class IlTriangleUpIcon {
  readonly viewBox = input("0 0 240 700")
  readonly width = input("0.35em")
  readonly height = input("1em")
}
