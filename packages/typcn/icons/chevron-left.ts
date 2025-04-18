import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnChevronLeftIcon],svg[typcn-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.414 5.586a2 2 0 0 0-2.828 0L5.171 12l6.415 6.414c.39.391.902.586 1.414.586s1.024-.195 1.414-.586a2 2 0 0 0 0-2.828L10.829 12l3.585-3.586a2 2 0 0 0 0-2.828"></svg:path>`,
})
export class TypcnChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
