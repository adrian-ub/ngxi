import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionTriangleOutlineIcon],svg[ion-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 448L256 64l208 384z"></svg:path>`,
})
export class IonTriangleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
