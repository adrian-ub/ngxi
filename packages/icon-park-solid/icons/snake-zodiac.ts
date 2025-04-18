import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSnakeZodiacIcon],svg[icon-park-solid-snake-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSSnakeZodiac0"><svg:g fill="none"><svg:g stroke="#fff" stroke-linecap="round" stroke-width="4" clip-path="url(#ipSSnakeZodiac1)"><svg:path d="m35.786 39.083l2.828-2.828a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-2.462 2.462m-10.266-6.705l7.071-7.07a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-7.071 7.071"></svg:path><svg:path d="m18.283 22.645l-8.66 8.66a6 6 0 0 0 0 8.486v0a6 6 0 0 0 8.485 0l9.9-9.9"></svg:path><svg:path stroke-linejoin="round" d="M15 9H7"></svg:path></svg:g><svg:defs><svg:clippath id="ipSSnakeZodiac1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSnakeZodiac0)"></svg:path>`,
})
export class IconParkSolidSnakeZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
