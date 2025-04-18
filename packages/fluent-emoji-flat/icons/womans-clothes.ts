import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatWomansClothesIcon],svg[fluent-emoji-flat-womans-clothes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FF6DC6" d="M22.29 9.3a7.2 7.2 0 0 1 2.32.44a54 54 0 0 1 4.84 2.91a1.22 1.22 0 0 1 .55 1.08c-.1 1.76-1.252 6.274-5.992 6.274v8.719a.87.87 0 0 1-.68.85a32.8 32.8 0 0 1-14.648.007a.86.86 0 0 1-.68-.85v-8.722c-4.74 0-6-4.518-6.08-6.278a1.22 1.22 0 0 1 .55-1.08a54 54 0 0 1 4.92-2.91a6.5 6.5 0 0 1 2.09-.46l1.29.51l.26.45c2 3.61 8 3.85 10 .23l.28-.62z"></svg:path><svg:path fill="#BB1D80" d="m9.92 9.29l6.28 6.6l5.22-6.59a15.83 15.83 0 0 1-11 0z"></svg:path><svg:path fill="#F70A8D" d="M16.73 15.92a1 1 0 0 1-1.48 0L9.41 9.28h1l5 5.62a.733.733 0 0 0 1.09 0l4.92-5.61h.91z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatWomansClothesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
