import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsContraceptiveDiaphragmOutline24pxIcon],svg[healthicons-contraceptive-diaphragm-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.213 10.384c-.327.28-.623.672-.819 1.063a1 1 0 1 1-1.788-.894a5.5 5.5 0 0 1 1.306-1.687C9.448 8.406 10.172 8 11 8a1 1 0 1 1 0 2c-.171 0-.448.094-.787.384"></svg:path><svg:path fill-rule="evenodd" d="M20 13.033v.017a2.5 2.5 0 0 1-.5 4.95h-15a2.5 2.5 0 0 1-.567-4.935C3.908 8.68 7.463 5 11.967 5A8.033 8.033 0 0 1 20 13.033M5.933 13H12v2H4.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H16v-2h2a6.033 6.033 0 0 0-6.033-6c-3.364 0-6.022 2.733-6.034 6" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsContraceptiveDiaphragmOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
