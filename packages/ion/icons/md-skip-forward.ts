import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdSkipForwardIcon],svg[ion-md-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 64v384l277.3-192L64 64z" fill="currentColor"></svg:path><svg:path d="M384 64h64v384h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdSkipForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
