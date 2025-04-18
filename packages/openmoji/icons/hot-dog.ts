import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHotDogIcon],svg[openmoji-hot-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f4aa41" d="M48.637 13.465a5 5 0 0 0-7.07 0l-28.102 28.1a5 5 0 0 0-.002 7.07l9.9 9.9a5 5 0 0 0 7.07 0l28.104-28.1a5.003 5.003 0 0 0 0-7.07z"></svg:path><svg:path fill="#ea5a47" d="M20.535 58.535a5 5 0 0 1-7.072-7.07l38.002-38a5 5 0 0 1 7.072 7.07z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M27 45.001a3 3 0 0 1-3.001 3.001a3 3 0 0 0-3 3M39.002 33c0 1.656-1.344 3-3.002 3a3 3 0 0 0-3 3m0 0a3 3 0 0 1-3 3c-1.657 0-3 1.345-3 3.001m18.002-18.003a3 3 0 0 1-3 3.001a3 3 0 0 0-3 3.001m12-12.002a3 3 0 0 1-3 3c-1.656 0-3 1.345-3 3"></svg:path><svg:path d="M20.535 58.535a5 5 0 0 1-7.072-7.07l38.002-38a5 5 0 0 1 7.072 7.07z"></svg:path><svg:path d="m50.05 14.879l-1.413-1.414a5 5 0 0 0-7.07 0l-28.102 28.1a5 5 0 0 0-.002 7.07l1.416 1.416m7.071 7.07l1.413 1.414a5 5 0 0 0 7.07 0l28.104-28.1a5.003 5.003 0 0 0 0-7.07l-1.414-1.416"></svg:path></svg:g>`,
})
export class OpenmojiHotDogIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
