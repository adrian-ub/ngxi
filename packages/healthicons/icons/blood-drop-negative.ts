import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBloodDropNegativeIcon],svg[healthicons-blood-drop-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBloodDropNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 44c7.732 0 14-6.15 14-13.737C38 18.243 24 4 24 4S10 18.242 10 30.263C10 37.85 16.268 44 24 44" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBloodDropNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBloodDropNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
