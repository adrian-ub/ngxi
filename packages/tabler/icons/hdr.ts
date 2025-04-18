import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHdrIcon],svg[tabler-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16V8m4 0v8m-4-4h4m3-4v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm7 4h2a2 2 0 1 0 0-4h-2v8m4 0l-3-4"></svg:path>`,
})
export class TablerHdrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
