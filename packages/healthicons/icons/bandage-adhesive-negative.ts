import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBandageAdhesiveNegativeIcon],svg[healthicons-bandage-adhesive-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBandageAdhesiveNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM27.536 9.15a8 8 0 1 1 11.313 11.315L20.465 38.849A8 8 0 0 1 9.15 27.536zM24 16.929a2 2 0 0 1 2.828 0l4.243 4.243a2 2 0 0 1 0 2.829L24 31.07a2 2 0 0 1-2.828 0l-4.243-4.242a2 2 0 0 1 0-2.828zm5.657 5.657l-4.243-4.242l-7.071 7.07l4.243 4.243zm2.05-6.464a1 1 0 1 0 1.414-1.414a1 1 0 0 0-1.414 1.414m2.414-4a1 1 0 1 1-1.414-1.414a1 1 0 0 1 1.414 1.414m-5.414 1a1 1 0 1 0 1.414-1.414a1 1 0 0 0-1.414 1.414m7.414 6a1 1 0 1 1-1.414-1.414a1 1 0 0 1 1.414 1.414m-.414-4a1 1 0 1 0 1.414-1.414a1 1 0 0 0-1.414 1.414m-21 16.586a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m.414 5.414a1 1 0 1 0-1.413-1.414a1 1 0 0 0 1.413 1.414m2.586-2.414a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-4.586-6a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-2.414 4a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBandageAdhesiveNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBandageAdhesiveNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
