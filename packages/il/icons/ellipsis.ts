import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilEllipsisIcon],svg[il-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M371 229q0 29-20 49t-50 20t-49-20t-20-49t20-50t49-20t50 20t20 50m-232 0q0 29-20 49t-50 20t-49-20t-20-49t20-50t49-20t50 20t20 50m463 0q0 29-20 49t-49 20t-49-20t-21-49t21-50t49-20t49 20t20 50"></svg:path>`,
})
export class IlEllipsisIcon {
  readonly viewBox = input("0 0 610 700")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
