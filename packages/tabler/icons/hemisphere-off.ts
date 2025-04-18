import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHemisphereOffIcon],svg[tabler-hemisphere-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.588 6.603C4.41 7.15 3 8.02 3 9c0 1.657 4.03 3 9 3m3.72-.267C18.834 11.26 21 10.215 21 9c0-1.657-4.03-3-9-3q-.995 0-1.93.07"></svg:path><svg:path d="M3 9a9 9 0 0 0 13.677 7.69m2.165-1.843A8.97 8.97 0 0 0 21 9M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHemisphereOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
