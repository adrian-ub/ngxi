import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHalfOrangeFruitIcon],svg[openmoji-half-orange-fruit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="2.403" fill-rule="evenodd" stroke-miterlimit="10"></svg:circle><svg:path fill="none" d="m28.46 17.87l15.07 36.39m-25.8-10.72L54.1 28.47m-36.35-.03l36.31 15.04M43.43 17.96L28.46 54.09"></svg:path></svg:g><svg:circle cx="35.68" cy="36" r="2" fill="#ffa7c0"></svg:circle><svg:circle cx="36" cy="36" r="26" fill="#e27022"></svg:circle><svg:circle cx="36" cy="36" r="19.63" fill="#f1b31c"></svg:circle><svg:path fill="none" stroke="#e27022" stroke-linejoin="round" stroke-width="2" d="m28.46 17.87l15.07 36.39m-.1-36.3L28.46 54.09M17.73 43.54L54.1 28.47m-36.35-.03l36.31 15.04"></svg:path><svg:circle cx="36" cy="36" r="2.403" fill="#e27022" fill-rule="evenodd" stroke="#e27022" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path d="M62 36a26 26 0 0 1-26 26a26 26 0 0 1-26-26a26 26 0 0 1 26-26a26 26 0 0 1 26 26"></svg:path><svg:path d="M55.63 36A19.63 19.63 0 0 1 36 55.63A19.63 19.63 0 0 1 16.37 36A19.63 19.63 0 0 1 36 16.37A19.63 19.63 0 0 1 55.63 36"></svg:path></svg:g>`,
})
export class OpenmojiHalfOrangeFruitIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
