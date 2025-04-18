import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAlcoholNegativeIcon],svg[healthicons-alcohol-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsAlcoholNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18.5 4a1 1 0 0 1 1 1v12.199c0 .193.077.378.213.514A14.64 14.64 0 0 1 24 28.063v13.58A2.356 2.356 0 0 1 21.643 44h-9.435A2.21 2.21 0 0 1 10 41.792V28.408a14.4 14.4 0 0 1 4.763-10.695a.72.72 0 0 0 .237-.531V5a1 1 0 0 1 1-1zM22 29H12v8h10zm6.999-11l-.638 6h7.278L35 18zm7.801-2h-9.6l-1.013 9.536A5.85 5.85 0 0 0 31 31.916V42h-3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3V31.915a5.85 5.85 0 0 0 4.813-6.379z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAlcoholNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAlcoholNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
