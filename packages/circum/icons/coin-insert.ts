import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCoinInsertIcon],svg[circum-coin-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.44 17.7h-3.67a7.48 7.48 0 0 0 1.78-4.86A7.55 7.55 0 1 0 6.23 17.7H2.56a.51.51 0 0 0-.5.5a.5.5 0 0 0 .5.5h18.88a.5.5 0 0 0 .5-.5a.51.51 0 0 0-.5-.5m-5.03 0H7.62a6.546 6.546 0 1 1 8.78-.01Z"></svg:path><svg:path fill="currentColor" d="M14 13.965a1.616 1.616 0 0 1-1.5 1.61v.65a.485.485 0 0 1-.5.48a.49.49 0 0 1-.5-.48v-.64h-.81a.5.5 0 0 1-.5-.5a.51.51 0 0 1 .5-.5h1.69a.617.617 0 0 0 .62-.62a.623.623 0 0 0-.62-.62h-.75a1.618 1.618 0 0 1-.13-3.23v-.65a.49.49 0 0 1 .5-.48a.485.485 0 0 1 .5.48v.64h.81a.5.5 0 0 1 0 1h-1.68a.62.62 0 0 0 0 1.24h.75a1.626 1.626 0 0 1 1.62 1.62"></svg:path>`,
})
export class CircumCoinInsertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
