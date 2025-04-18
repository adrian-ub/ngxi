import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFilter16Icon],svg[qlementine-icons-filter-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.43 1c-.799 0-1.28.89-.832 1.55l4.4 6.6V14a.5.5 0 0 0 .276.447l3 1.5a.5.5 0 0 0 .723-.447V9.15l4.4-6.6A.996.996 0 0 0 13.565 1h-11.1zm0 1h11.1L9.05 8.72a.5.5 0 0 0-.084.277v5.69l-2-1v-4.69a.5.5 0 0 0-.084-.277L2.402 2z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsFilter16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
