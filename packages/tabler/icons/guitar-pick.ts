import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGuitarPickIcon],svg[tabler-guitar-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18.5C18 16 20 12 20 8c0-2.946-2.084-4.157-4.204-4.654Q14.5 3.001 12 3q-2.5 0-3.796.346C6.084 3.843 4 5.054 4 8c0 3.312 2 8 4 10.5q.445.556.963 1.081l.354.347a3.9 3.9 0 0 0 5.364 0A14 14 0 0 0 16 18.5"></svg:path>`,
})
export class TablerGuitarPickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
