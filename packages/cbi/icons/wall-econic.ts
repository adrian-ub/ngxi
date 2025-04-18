import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiWallEconicIcon],svg[cbi-wall-econic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.981 2.625l-5.7.712v17.338l5.463.95l9.975-2.375V5Zm8.313 3.8v11.637l-2.375-.474v-1.425l-4.75.712h-.475v-9.5h.475l4.987.713V6.662Zm-8.55.95v9.5H8.319V7.612Z"></svg:path>`,
})
export class CbiWallEconicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
