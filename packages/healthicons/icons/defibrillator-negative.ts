import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDefibrillatorNegativeIcon],svg[healthicons-defibrillator-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsDefibrillatorNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-6.633 19.269c1.221-3.105.815-6.722-1.523-9.297a9 9 0 0 0-2.93-2.146A9.09 9.09 0 0 0 26.74 9.623l-2.645 2.622l-2.283-2.264c-3.457-3.429-9.144-3.934-12.777-.69a9 9 0 0 0-2.164 2.905a8.9 8.9 0 0 0-.191 7.073c2.855 7.105 10.49 14.511 16.18 20.03l1.235 1.201c1.73-2.143 3.852-4.316 6.031-6.547c4.456-4.564 9.153-9.374 11.24-14.684M26.91 14.536l-7.94 10.266a.5.5 0 0 0 .395.806h4.527l-1.527 7.75l7.94-10.266a.5.5 0 0 0-.396-.806h-4.526z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDefibrillatorNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDefibrillatorNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
