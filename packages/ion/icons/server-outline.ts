import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionServerOutlineIcon],svg[ion-server-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><svg:ellipse cx="256" cy="112" rx="176" ry="80"></svg:ellipse><svg:path d="M432 112v288c0 44.183-78.798 80-176 80S80 444.183 80 400V112"></svg:path><svg:path d="M432 256c0 44.183-78.798 80-176 80S80 300.183 80 256"></svg:path></svg:g>`,
})
export class IonServerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
