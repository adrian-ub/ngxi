import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowsJoin2Icon],svg[tabler-arrows-join-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7h1.948c1.913 0 3.705.933 4.802 2.5a5.86 5.86 0 0 0 4.802 2.5H21"></svg:path><svg:path d="M3 17h1.95a5.85 5.85 0 0 0 4.798-2.5a5.85 5.85 0 0 1 4.798-2.5H20"></svg:path><svg:path d="m18 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class TablerArrowsJoin2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
