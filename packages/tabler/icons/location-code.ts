import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLocationCodeIcon],svg[tabler-location-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.505 17.01L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.677 10.184M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerLocationCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
