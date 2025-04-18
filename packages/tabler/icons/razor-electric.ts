import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRazorElectricIcon],svg[tabler-razor-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3v2m4-2v2m4-2v2m-7 7v6a3 3 0 0 0 6 0v-6zM8 5h8l-1 4H9zm4 12v1"></svg:path>`,
})
export class TablerRazorElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
