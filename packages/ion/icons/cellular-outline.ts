import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCellularOutlineIcon],svg[ion-cellular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="64" height="320" x="416" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="64" height="240" x="288" y="176" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="64" height="176" x="160" y="240" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="64" height="112" x="32" y="304" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect>`,
})
export class IonCellularOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
