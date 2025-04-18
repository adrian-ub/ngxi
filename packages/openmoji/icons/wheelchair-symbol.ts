import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWheelchairSymbolIcon],svg[openmoji-wheelchair-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-miterlimit="10"><svg:path fill="#61b2e4" d="M60 61H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h48a1 1 0 0 1 1 1v48a1 1 0 0 1-1 1"></svg:path><svg:path fill="#fff" d="m39.01 36.8l5.888.983c.937.157 2.057.515 2.8 1.107c.589.47 1.112 1.1 1.112 1.848c0 1.567-.736 11.44-1.112 12c-1.116 1.661-2.582.668-2.839-.241c-.33-1.165.144-10.27.144-10.27l-10.27.568s-1.633-.002-1.712-1.712c-.08-1.707-2.534-10.12 2.28-14.55c2.568-4.28 5.992-.856 4.28 2.568s-.568 7.704-.568 7.704z"></svg:path><svg:circle cx="41.69" cy="19.51" r="3" fill="#fff"></svg:circle><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M35.62 27.41c-8.597 1.765-5.715-.849-7.291 8.242"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M60 61H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h48a1 1 0 0 1 1 1v48a1 1 0 0 1-1 1"></svg:path><svg:circle cx="41.69" cy="19.51" r="3"></svg:circle><svg:path d="M42.19 45.49c0 5.617-4.631 10.15-10.28 9.996c-5.218-.145-9.568-4.495-9.712-9.713a9.98 9.98 0 0 1 4.063-8.333"></svg:path><svg:path d="m28.33 35.65l-.857-7.322c-.1-.414.071-.846.43-1.078l8.203-1.978c3.123-1.161 4.688.995 3.47 3.821c-1.712 3.424-.568 7.704-.568 7.704l5.888.983c.937.157 2.057.515 2.8 1.107c.589.47 1.112 1.1 1.112 1.848c0 1.567-.736 11.44-1.112 12c-1.116 1.661-2.582.668-2.84-.241c-.328-1.165.145-10.27.145-10.27c-3.056.3-11.3 3.138-11.98-2.011c-.02-1.266-.554-6.648 1.117-10.78"></svg:path></svg:g>`,
})
export class OpenmojiWheelchairSymbolIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
