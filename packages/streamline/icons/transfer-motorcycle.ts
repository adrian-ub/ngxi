import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTransferMotorcycleIcon],svg[streamline-transfer-motorcycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M10.499 13.5a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002"></svg:path><svg:path stroke-linejoin="round" d="M2 12H.5v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5A1.5 1.5 0 0 0 8 12h1h-4m7 0h.5c.552 0 1.012-.452.908-.994C13.077 9.278 11.866 8 10 8h-.5"></svg:path><svg:path stroke-linejoin="round" d="M8 3.5h1.5v7.379"></svg:path><svg:path stroke-linejoin="round" d="M11.5 4.5h-1a1 1 0 0 0 0 2h1z"></svg:path><svg:path d="M1.5 8H4a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1V7a1 1 0 0 0 1 1Z"></svg:path></svg:g>`,
})
export class StreamlineTransferMotorcycleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
