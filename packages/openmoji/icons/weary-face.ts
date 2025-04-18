import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWearyFaceIcon],svg[openmoji-weary-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="M36 12c-13.23 0-24 10.77-24 24s10.77 24 24 24s24-10.77 24-24s-10.77-24-24-24"></svg:path><svg:g stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="23" fill="none"></svg:circle><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M22.88 23.92c5.102-.061 7.273-1.882 8.383-3.346"></svg:path><svg:path d="M46.24 47.56c0-2.592-2.867-7.121-10.25-6.93c-6.974.181-10.22 4.518-10.22 7.111s4.271-1.611 10.05-1.492c6.317.13 10.43 3.903 10.43 1.311z"></svg:path><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M49.12 23.92c-5.102-.061-7.273-1.882-8.383-3.346m7.503 9.936c-6.199 1.47-7.079 1.059-8.868-1.961M23.76 30.51c6.199 1.47 7.079 1.059 8.868-1.961"></svg:path></svg:g>`,
})
export class OpenmojiWearyFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
