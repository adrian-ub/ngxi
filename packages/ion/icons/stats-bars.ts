import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionStatsBarsIcon],svg[ion-stats-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M176 96h64v320h-64z" fill="currentColor"></svg:path><svg:path d="M80 320h64v96H80z" fill="currentColor"></svg:path><svg:path d="M272 256h64v160h-64z" fill="currentColor"></svg:path><svg:path d="M368 192h64v224h-64z" fill="currentColor"></svg:path>`,
})
export class IonStatsBarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
