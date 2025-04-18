import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowsUpDown12Icon],svg[qlementine-icons-arrows-up-down-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.68.04a.5.5 0 0 0-.545.108l-3 3a.501.501 0 0 0 .707.707l2.15-2.15v8.59l-2.15-2.15a.501.501 0 0 0-.707.707l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 .006-.713a.5.5 0 0 0-.713.007l-2.15 2.15v-8.59l2.15 2.15a.5.5 0 0 0 .713.006a.5.5 0 0 0-.006-.713l-3-3A.5.5 0 0 0 6.68.04"></svg:path>`,
})
export class QlementineIconsArrowsUpDown12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
