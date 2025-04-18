import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBisCareIcon],svg[arcticons-bis-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 35.145c1.352 2.468 2.317 4.74 4.986 4.616h27.029c2.668.124 3.633-2.148 4.985-4.616m-15.394-4.342h9.381c4.062 0 1.705-3.263 0-5.654L25.094 9.175c-.268-.374-.613-.94-1.094-.94s-.825.566-1.094.94L11.513 25.15c-1.704 2.39-4.062 5.654 0 5.654h9.382m5.757-7.781c0 2.172-1.187 3.933-2.651 3.934c-1.464 0-2.651-1.761-2.652-3.934c0-2.174 1.187-3.935 2.652-3.935c1.464 0 2.65 1.762 2.65 3.935"></svg:path>`,
})
export class ArcticonsBisCareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
