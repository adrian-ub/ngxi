import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerUpRightIcon],svg[mynaui-fat-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19.923q3.303-4.216 5.866-4.785q2.564-.569 4.88-.172V20L21 11.786L13.747 4v4.784Q9.46 8.82 6.46 12T3 19.923"></svg:path>`,
})
export class MynauiFatCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
