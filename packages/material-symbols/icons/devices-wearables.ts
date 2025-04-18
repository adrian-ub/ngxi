import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDevicesWearablesIcon],svg[material-symbols-devices-wearables-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 18q1.45 0 2.475-1.025T21 14.5t-1.025-2.475T17.5 11t-2.475 1.025T14 14.5t1.025 2.475T17.5 18M4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h8q.825 0 1.413.588T14 4v3.85q-.575.3-1.075.688T12 9.4V7H4v10h6.425q.425 1.275 1.275 2.3t2.025 1.7q-.275.475-.737.738T12 22zm11 0v-2.6q-1.4-.7-2.2-2.012T12 14.5t.8-2.887T15 9.6V7h5v2.6q1.4.7 2.2 2.013T23 14.5t-.8 2.888T20 19.4V22z"></svg:path>`,
})
export class MaterialSymbolsDevicesWearablesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
