import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionDuplicateSharpIcon],svg[ion-duplicate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 80h288V56a24 24 0 0 0-24-24H66a34 34 0 0 0-34 34v310a24 24 0 0 0 24 24h24V112a32 32 0 0 1 32-32"></svg:path><svg:path fill="currentColor" d="M456 112H136a24 24 0 0 0-24 24v320a24 24 0 0 0 24 24h320a24 24 0 0 0 24-24V136a24 24 0 0 0-24-24m-64 200h-80v80h-32v-80h-80v-32h80v-80h32v80h80Z"></svg:path>`,
})
export class IonDuplicateSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
