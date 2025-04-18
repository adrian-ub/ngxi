import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingMosqueIcon],svg[tabler-building-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h7v-2a2 2 0 1 1 4 0v2h7M4 21V11m16 10V11M4 16h3v-3h10v3h3m-3-3a5 5 0 0 0-10 0m14-2.5c0-.329-.077-.653-.224-.947L20 8l-.776 1.553A2.1 2.1 0 0 0 19 10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5m-16 0c0-.329-.077-.653-.224-.947L4 8l-.776 1.553A2.1 2.1 0 0 0 3 10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5M12 2a2 2 0 1 0 2 2m-2 2v2"></svg:path>`,
})
export class TablerBuildingMosqueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
