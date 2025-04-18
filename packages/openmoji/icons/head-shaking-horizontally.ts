import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHeadShakingHorizontallyIcon],svg[openmoji-head-shaking-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.669" cy="36.132" r="19.35" fill="#fcea2b"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M33.045 42.747c-.921 1.04-2.5 1.704-4.74 1.704c-2.224 0-3.805-.657-4.736-1.684m1.156-8.106c-3.336 1.78-6.56 0-6.56 0m19.705 0c-3.336 1.78-6.56 0-6.56 0"></svg:path><svg:path d="M50.772 48.137a18.82 18.82 0 0 1-14.344 6.614c-10.416 0-18.86-8.444-18.86-18.86s8.444-18.86 18.86-18.86s18.86 8.444 18.86 18.86q0 .195-.004.39"></svg:path><svg:path d="M47 41c5 0 19-2 11-7m-8.43 10.685C53.008 44.49 57 44 60 42"></svg:path></svg:g>`,
})
export class OpenmojiHeadShakingHorizontallyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
