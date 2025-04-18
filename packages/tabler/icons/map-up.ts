import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapUpIcon],svg[tabler-map-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5L9 17l-6 3V7l6-3l6 3l6-3v8.5M9 4v13m6-10v7.5m4 7.5v-6m3 3l-3-3l-3 3"></svg:path>`,
})
export class TablerMapUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
