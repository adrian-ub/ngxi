import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionAlbumsSharpIcon],svg[ion-albums-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 64h256v32H128zm-32 48h320v32H96zm368 336H48V160h416Z"></svg:path>`,
})
export class IonAlbumsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
