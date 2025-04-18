import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGrillOffIcon],svg[tabler-grill-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8H5a6 6 0 0 0 6 6h2q.473 0 .926-.071m2.786-1.214a5.99 5.99 0 0 0 2.284-4.49V8h-7m6.831 10.815a2 2 0 1 1-2.663-2.633M9 14l-3 6m9-2H7m8-13V4m-3 1V4M9 5V4M3 3l18 18"></svg:path>`,
})
export class TablerGrillOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
