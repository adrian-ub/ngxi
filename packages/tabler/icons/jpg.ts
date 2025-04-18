import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerJpgIcon],svg[tabler-jpg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1m-10 4V8h2a2 2 0 1 1 0 4h-2M3 8h4v6a2 2 0 0 1-2 2H3.5a.5.5 0 0 1-.5-.5V15"></svg:path>`,
})
export class TablerJpgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
