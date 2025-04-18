import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDrinkIcon],svg[zmdi-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h384l-43 389q-2 16-14 26.5T299 429H85q-16 0-28-10.5T43 392zm192 362q27 0 45.5-18.5T256 301q0-19-16-47.5T208 205l-16-19q-7 8-17.5 21.5t-28.5 44t-18 49.5q0 27 18.5 45.5T192 365m135-234l9-86H48l9 86z"></svg:path>`,
})
export class ZmdiDrinkIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
