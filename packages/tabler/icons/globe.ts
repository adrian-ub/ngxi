import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGlobeIcon],svg[tabler-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0-8 0"></svg:path><svg:path d="M5.75 15A8.015 8.015 0 1 0 15 2m-4 15v4m-4 0h8"></svg:path></svg:g>`,
})
export class TablerGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
