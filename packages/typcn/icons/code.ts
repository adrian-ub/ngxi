import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnCodeIcon],svg[typcn-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.171 18a2 2 0 0 1-1.414-.586L2.343 13l4.414-4.414a2 2 0 1 1 2.828 2.828L8 13l1.585 1.586A2 2 0 0 1 8.171 18m7.658 0a2 2 0 0 1-1.414-3.414L16 13l-1.585-1.586a2 2 0 1 1 2.828-2.828L21.657 13l-4.414 4.414a2 2 0 0 1-1.414.586"></svg:path>`,
})
export class TypcnCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
