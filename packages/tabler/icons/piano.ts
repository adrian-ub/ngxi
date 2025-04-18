import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPianoIcon],svg[tabler-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 12v-6"></svg:path><svg:path d="M8 5v8h2V5m5 14v-6m-1-8v8h2V5"></svg:path></svg:g>`,
})
export class TablerPianoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
