import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRatingMature24FilledIcon],svg[fluent-rating-mature-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm5.826 2.02a.75.75 0 0 0-1.326.48v6.5a.75.75 0 1 0 1.5 0v-4.428l2.424 2.908a.75.75 0 0 0 1.152 0L15 10.822v4.428a.75.75 0 1 0 1.5 0v-6.5a.75.75 0 0 0-1.326-.48L12 12.079z"></svg:path>`,
})
export class FluentRatingMature24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
