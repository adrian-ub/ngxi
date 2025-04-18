import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAntivirusaltIcon],svg[whh-antivirusalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M934 934q-90 90-217 90t-216-90L90 523Q0 434 0 307T90 90T307 0t216 90l411 411q90 89 90 216t-90 217m-94-365L624 353L353 624l216 216q56 56 135.5 56T840 840t56-135.5T840 569"></svg:path>`,
})
export class WhhAntivirusaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
