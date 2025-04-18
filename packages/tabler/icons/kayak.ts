import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerKayakIcon],svg[tabler-kayak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.414 6.414a2 2 0 0 0 0-2.828L5 2.172L2.172 5l1.414 1.414a2 2 0 0 0 2.828 0m11.172 11.172a2 2 0 0 0 0 2.828L19 21.828L21.828 19l-1.414-1.414a2 2 0 0 0-2.828 0M6.5 6.5l11 11m4.5-15C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5m-15.5 10l5 5m1-11l5 5"></svg:path>`,
})
export class TablerKayakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
