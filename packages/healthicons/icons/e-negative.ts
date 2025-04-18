import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsENegativeIcon],svg[healthicons-e-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsENegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h12a2 2 0 1 0 0-4H20v-8h10a2 2 0 1 0 0-4H20v-8h10a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsENegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsENegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
