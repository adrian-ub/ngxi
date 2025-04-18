import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMegaphoneIcon],svg[openmoji-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m19.64 44.13l17.57 1.154c2.23.114 11.515 2.634 13.57 3.504l8.86 4.234v-35.44l-11.463 5.405c-4.249 1.69-11.72 2.752-16.275 3.156l-12.262.581z"></svg:path><svg:path fill="#d0cfce" d="M19.64 44.067v-3.183s25.39-.507 40 8.546l-.171 3.501c-15.21-10.43-39.829-8.864-39.829-8.864"></svg:path><svg:path fill="#d22f27" d="M12.85 25.98h6.787v18.63H12.85a2 2 0 0 1-2-2V27.98a2 2 0 0 1 2-2"></svg:path><svg:rect width="6" height="40.01" x="59.64" y="15.29" fill="#ea5a47" rx="2" ry="2"></svg:rect><svg:path fill="#9b9b9a" d="m19.636 44.92l.628 4.031h-1.368l1.681 8.916h.75l.38 2.016l-5.725.076l-2.835-15.04"></svg:path><svg:path fill="#ea5a47" d="M10.85 28.79H8.365a2 2 0 0 0-2 2v8.922a2 2 0 0 0 2 2h2.485"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.64 25.98s24.79 1.289 40-9.142m-40 28.042s24.79-1.289 40 9.142M12.85 25.98h6.787v18.63H12.85a2 2 0 0 1-2-2V27.98a2 2 0 0 1 2-2"></svg:path><svg:rect width="6" height="40.01" x="59.64" y="15.29" rx="2" ry="2"></svg:rect><svg:path d="m19.636 44.92l.877 4.648h-1.5l1.564 8.299h.5l.38 2.016l-5.476.076l-2.835-15.04M19.64 25.98s24.79 1.289 40-9.142m-40 28.042s24.79-1.289 40 9.142M10.85 28.79H8.365a2 2 0 0 0-2 2v8.922a2 2 0 0 0 2 2h2.485M13.64 41h3"></svg:path></svg:g>`,
})
export class OpenmojiMegaphoneIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
