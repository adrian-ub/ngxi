import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight03Icon],svg[hugeicons-rotate-right-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.376 10.46l.444.765c.49.845.199 1.926-.65 2.414m0 0l-.77.442m.77-.442a.89.89 0 0 1 1.212.323c.49.845.2 1.926-.65 2.414m0 0l-.768.442m.769-.442a.753.753 0 0 1 1.08.385l.108.288a1.76 1.76 0 0 1-.775 2.15l-1.132.65c-1.671.96-2.507 1.44-3.32 1.569c-.47.074-1.187-.03-1.723-.136a1.96 1.96 0 0 0-1.357.203L8.719 22m6.119-10.656l4.997-2.872a1.32 1.32 0 0 0 .488-1.81a1.335 1.335 0 0 0-1.82-.485l-7.66 4.4l.531-1.957a1.487 1.487 0 0 0-1.221-1.859a1.51 1.51 0 0 0-1.608.891l-1.937 4.785c-.371.916-1.248 1.8-2.107 2.294m10.636-9.765c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C4.082 4.56 3.808 5.42 3.499 5.995" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
