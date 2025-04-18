import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsINoteActionNegativeIcon],svg[healthicons-i-note-action-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsINoteActionNegative0)"><svg:path d="M14 19a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM15 8h-2a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h17a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-1v2a1 1 0 1 1-2 0V7a1 1 0 1 0-2 0v1h-6v2a1 1 0 1 1-2 0V7a1 1 0 1 0-2 0zm-7 2v25a5 5 0 0 0 5 5h17v2H13a7 7 0 0 1-7-7V10zm28 3a3 3 0 1 1 6 0v3h-6zm0 20V18h6v15l-3 4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsINoteActionNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsINoteActionNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
