import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsKNegativeIcon],svg[healthicons-k-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsKNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 12v11.172l12.586-12.586a2 2 0 1 1 2.828 2.828L22.828 24l10.586 10.586a2 2 0 1 1-2.828 2.828L20 26.828l-2 2V36a2 2 0 1 1-4 0V12a2 2 0 1 1 4 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsKNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsKNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
