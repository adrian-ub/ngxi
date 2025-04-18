import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiAlcoholShop11Icon],svg[maki-alcohol-shop-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 4v2.5a1.5 1.5 0 0 0 1 1.41V10h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9V7.91a1.5 1.5 0 0 0 1-1.41V4H7zm2.5 2.5a1 1 0 1 1-2 0v-2h2v2zM4.21 2.85V2.5a.355.355 0 1 0 0-.71v-.35a.35.35 0 0 0-.36-.35h-.71a.35.35 0 0 0-.36.34v.36a.355.355 0 1 0 0 .71v.35C2.79 3.87 1 5 1 6v4.25a.7.7 0 0 0 .71.71h3.58a.79.79 0 0 0 .71-.67V6c0-.91-1.79-2.19-1.79-3.15zM3.5 9a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z" fill="currentColor"></svg:path>`,
})
export class MakiAlcoholShop11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
