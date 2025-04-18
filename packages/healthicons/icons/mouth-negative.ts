import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMouthNegativeIcon],svg[healthicons-mouth-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMouthNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 14.182C15.2 10.255 7 18.545 4 24c3 4.364 11.2 12 20 12s17-7.636 20-12c-3-5.455-11-14.182-20-9.818M24 21c-5.816 0-11.585 1.473-14.69 2.523c-.445.15-.43.762.018.904C12.318 25.375 17.92 27 24 27c5.98 0 11.5-1.66 14.525-2.57l.025-.008c.461-.138.487-.784.03-.936C35.45 22.439 29.747 21 24 21" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMouthNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMouthNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
