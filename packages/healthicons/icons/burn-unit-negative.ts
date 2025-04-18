import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBurnUnitNegativeIcon],svg[healthicons-burn-unit-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBurnUnitNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm14.089 1c0 4.781-2.035 8.412-4.314 12.477l-.47.843c-3.068 5.5-.215 10.263 3.288 14.68c0-5.07.806-7.931 4.6-11.741C25.525 30.435 25.737 33.5 25 38c9.663-4.666 9.146-12.317 6.33-21c-.483 1.78-1.338 3.417-1.984 4.653l-.228.438c-1.309-5.07-5.042-8.782-9.03-12.091" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBurnUnitNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBurnUnitNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
