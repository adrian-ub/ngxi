import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAnimalBatNegativeIcon],svg[healthicons-animal-bat-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsAnimalBatNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM20.994 12.89a1 1 0 0 0-1.988.22l.642 5.773c-4.246-.776-6.114-2.076-6.26-7.883C6.858 11 4 17.5 4 27c7.333-1.875 11.5 2.5 11.5 6.4H21l3 5.6l3-5.6h5.5c0-3.9 4.167-8.275 11.5-6.4c0-9.5-2.857-16-9.388-16c-.146 5.807-2.014 7.107-6.26 7.883l.642-5.773a1 1 0 0 0-1.988-.22l-.177 1.59c-.984-.318-1.898-.485-2.835-.48c-.933.005-1.844.18-2.822.494z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAnimalBatNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAnimalBatNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
