import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionConnectionBarsIcon],svg[ion-connection-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 352h64v64H80z" fill="currentColor"></svg:path><svg:path d="M176 288h64v128h-64z" fill="currentColor"></svg:path><svg:path d="M272 192h64v224h-64z" fill="currentColor"></svg:path><svg:path d="M368 96h64v320h-64z" fill="currentColor"></svg:path>`,
})
export class IonConnectionBarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
