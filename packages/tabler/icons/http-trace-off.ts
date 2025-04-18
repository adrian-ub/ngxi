import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHttpTraceOffIcon],svg[tabler-http-trace-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h4M5 8v8m5-4h2m2-2a2 2 0 0 0-2-2m-2 2v6m4 0l-3-4m6 1v-3a2 2 0 1 1 4 0v6m-4-3h4M3 3l18 18"></svg:path>`,
})
export class TablerHttpTraceOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
