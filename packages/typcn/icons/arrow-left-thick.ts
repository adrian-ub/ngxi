import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnArrowLeftThickIcon],svg[typcn-arrow-left-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11h-7.244l1.586-1.586a2 2 0 1 0-2.828-2.828L3.1 13l6.414 6.414c.39.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L10.756 15H18a2 2 0 0 0 0-4"></svg:path>`,
})
export class TypcnArrowLeftThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
