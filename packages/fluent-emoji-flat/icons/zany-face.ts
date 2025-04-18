import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatZanyFaceIcon],svg[fluent-emoji-flat-zany-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M19.622 29.521c9.016-2.416 11.9-9.677 9.898-17.145c-2-7.468-8.128-12.315-17.145-9.899s-11.9 9.677-9.898 17.145c2 7.468 8.128 12.315 17.145 9.899"></svg:path><svg:path fill="#BB1D80" d="M18.588 25.66C8.93 28.246 6.341 18.587 6.341 18.587l19.318-5.176s2.589 9.66-7.07 12.247"></svg:path><svg:path fill="#fff" d="M23.633 15.508L9.143 19.39a1.5 1.5 0 0 1-1.836-1.06l17.386-4.66a1.5 1.5 0 0 1-1.06 1.838"></svg:path><svg:path fill="#F70A8D" d="M19.38 28.553c4.057-1.087 4.244-6.78 4.098-7.827c-.34-2.336-4.096-1.884-6.526-1.233s-5.961 2.161-5.065 4.338c.397.981 3.436 5.809 7.493 4.722"></svg:path><svg:path fill="#fff" d="M10.429 16.458a4.5 4.5 0 1 0-2.33-8.694a4.5 4.5 0 0 0 2.33 8.694m10.625-2.848a4.5 4.5 0 1 0-2.33-8.693a4.5 4.5 0 0 0 2.33 8.694"></svg:path><svg:path fill="#402A32" d="M21.916 7.168a2 2 0 1 1-3.864 1.035a2 2 0 0 1 3.864-1.035m-10.815 6.004a2 2 0 1 1-3.864 1.035a2 2 0 0 1 3.864-1.035"></svg:path></svg:g>`,
})
export class FluentEmojiFlatZanyFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
