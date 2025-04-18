import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoShareIcon],svg[fontisto-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.237 15.638h-.003a4.04 4.04 0 0 0-3.004 1.334l-.003.004l-8.948-4.348c0-.167.084-.418.084-.669a1.4 1.4 0 0 0-.087-.595l.003.01l8.948-4.348a4.04 4.04 0 0 0 3.007 1.338h.004a4.181 4.181 0 1 0-4.181-4.181a1.4 1.4 0 0 0 .087.595l-.003-.01l-8.948 4.348a4.04 4.04 0 0 0-3.007-1.338h-.004a4.181 4.181 0 0 0 0 8.362h.003a4.04 4.04 0 0 0 3.004-1.334l.003-.004l8.948 4.348c0 .167-.084.418-.084.669a4.181 4.181 0 1 0 8.363-.092a4.09 4.09 0 0 0-4.09-4.09l-.097.001z"></svg:path>`,
})
export class FontistoShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
