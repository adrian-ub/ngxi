import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIpadIcon],svg[ion-ipad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112 72.8v366.4c0 4.9 3.9 8.8 8.8 8.8h270.4c4.9 0 8.8-3.9 8.8-8.8V72.8c0-4.9-3.9-8.8-8.8-8.8H120.8c-4.9 0-8.8 3.9-8.8 8.8zm144 364.8c-7.5 0-13.6-6-13.6-13.5s6.1-13.6 13.6-13.6c7.4 0 13.5 6.1 13.5 13.6.1 7.5-6 13.5-13.5 13.5zm-112-319c0-3.5 2.7-6.6 6-6.6h211.2c3.4 0 6.8 3.1 6.8 6.6v275.2c0 3.5-3.4 6.3-6.8 6.3H150c-3.4 0-6-2.8-6-6.3V118.6z" fill="currentColor"></svg:path>`,
})
export class IonIpadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
