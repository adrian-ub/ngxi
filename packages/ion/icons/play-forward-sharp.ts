import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardSharpIcon],svg[ion-play-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 400l240-144L16 112zm240 0l240-144l-240-144z"></svg:path>`,
})
export class IonPlayForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
