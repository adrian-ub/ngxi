import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnArrowUpThickIcon],svg[typcn-arrow-up-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.172L5.586 9.586a2 2 0 1 0 2.828 2.828L10 10.828v7.242a2 2 0 0 0 4 0v-7.242l1.586 1.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828z"></svg:path>`,
})
export class TypcnArrowUpThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
