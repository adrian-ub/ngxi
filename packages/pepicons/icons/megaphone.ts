import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsMegaphoneIcon],svg[pepicons-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m7.4 10.054l5.6 1.527V5.62L7.4 7.146v2.908Zm-2 .764a1 1 0 0 0 .737.965l7.6 2.072A1 1 0 0 0 15 12.891V4.309a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965v4.436Z"></svg:path><svg:path d="M5.016 9.8V7.4H3.969a2.429 2.429 0 0 0 .004 2.4h1.043Zm1 2a1 1 0 0 0 1-1V6.4a1 1 0 0 0-1-1H3.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.555.555 0 0 0 .405.176h2.76Z"></svg:path><svg:path d="M6.424 12H5.84l-.766 3h.583l.767-3Zm-.584-2a2 2 0 0 0-1.938 1.506l-1.084 4.247A1 1 0 0 0 3.788 17h1.87a2 2 0 0 0 1.937-1.505l.767-3A2 2 0 0 0 6.424 10H5.84Zm13.192-5.555a1 1 0 0 1-.277 1.387l-1.5 1a1 1 0 0 1-1.11-1.664l1.5-1a1 1 0 0 1 1.387.277ZM15.7 8.6a1 1 0 0 1 1-1h1.5a1 1 0 0 1 0 2h-1.5a1 1 0 0 1-1-1Zm.234 1.909a1 1 0 0 1 1.409-.123l1.38 1.16a1 1 0 0 1-1.286 1.531l-1.38-1.16a1 1 0 0 1-.123-1.408Z"></svg:path></svg:g>`,
})
export class PepiconsMegaphoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
