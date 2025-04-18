import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPerseveringFaceIcon],svg[openmoji-persevering-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M36.2 13.316c-12.572 0-22.8 10.228-22.8 22.8s10.228 22.8 22.8 22.8S59 48.688 59 36.116s-10.228-22.8-22.8-22.8"></svg:path><svg:path fill="#FFF" d="M28 51c.27-.356 3.31-8.218 8.421-8.004C41.026 43.19 43.65 50.537 44 51z"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="23"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m44.536 21.439l6.385 3.277m-24-3.277l-6.385 3.277M24 28l7 4l-7 4m24-8l-7 4l7 4M28 51c.27-.356 1-8 8.421-8.004C43 42.993 43.65 50.537 44 51z"></svg:path></svg:g>`,
})
export class OpenmojiPerseveringFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
