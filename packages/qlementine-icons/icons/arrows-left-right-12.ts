import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowsLeftRight12Icon],svg[qlementine-icons-arrows-left-right-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.68a.5.5 0 0 0-.109-.545l-3-3a.501.501 0 0 0-.707.707l2.15 2.15h-8.59l2.15-2.15a.501.501 0 0 0-.707-.707l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .713.006a.5.5 0 0 0-.006-.713l-2.15-2.15h8.59l-2.15 2.15a.5.5 0 0 0-.007.713a.5.5 0 0 0 .713-.006l3-3A.5.5 0 0 0 12 5.68"></svg:path>`,
})
export class QlementineIconsArrowsLeftRight12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
