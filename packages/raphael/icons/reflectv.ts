import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelReflectvIcon],svg[raphael-reflectv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.643 16.008v-.854h-1.705v.854zm3.41 0v-.854h-1.705v.854zm3.41 0v-.854h-1.705v.854zm2.596 0v-.854h-.892v.854h.89zm-12.828 0v-.854h-1.71v.854zm-13.64 0v-.854H1.89v.854h1.705zm3.41 0v-.854H5.3v.854h1.705zm3.412 0v-.854H8.71v.854h1.704zm3.41 0v-.854H12.12v.854zm-10.13-2.84h22.134V1.15zm3.354-.854l17.93-9.73v9.73zm18.78 5.728H3.694l22.134 12.015z"></svg:path>`,
})
export class RaphaelReflectvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
