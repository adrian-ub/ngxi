import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsBluetooth16Icon],svg[qlementine-icons-bluetooth-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.28.05a.5.5 0 0 1 .529.06l5 4a.5.5 0 0 1-.005.785l-3.99 3.11l3.99 3.11a.5.5 0 0 1 .005.785l-5 4a.5.5 0 0 1-.812-.391v-6.09l-3.19 2.48a.5.5 0 0 1-.614-.79l3.81-2.96V7.86L3.193 4.9a.5.5 0 0 1 .614-.79l3.19 2.48V.5c0-.191.11-.366.283-.45m.717 8.58v5.83l3.69-2.95l-3.69-2.87zm0-1.27l3.69-2.87l-3.69-2.95v5.83z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsBluetooth16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
