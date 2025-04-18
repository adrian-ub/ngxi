import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileInfinityIcon],svg[tabler-file-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.536 17.586a2.123 2.123 0 0 0-2.929 0a1.95 1.95 0 0 0 0 2.828c.809.781 2.12.781 2.929 0s-.805.778 0 0l1.46-1.41l1.46-1.419"></svg:path><svg:path d="m15.54 17.582l1.46 1.42l1.46 1.41c.809.78-.805-.779 0 0s2.12.781 2.929 0a1.95 1.95 0 0 0 0-2.828a2.123 2.123 0 0 0-2.929 0M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M9.5 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v6"></svg:path></svg:g>`,
})
export class TablerFileInfinityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
