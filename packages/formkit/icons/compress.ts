import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitCompressIcon],svg[formkit-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.09c-.38 0-.77-.15-1.06-.44l-2.79-2.8c-.2-.2-.2-.51 0-.71s.51-.2.71 0l2.79 2.79c.19.19.51.19.71 0l2.79-2.79c.2-.2.51-.2.71 0s.2.51 0 .71L9.07 4.64c-.29.29-.68.44-1.06.44ZM11.5 14a.47.47 0 0 1-.35-.15l-2.79-2.79a.513.513 0 0 0-.71 0l-2.79 2.79c-.2.2-.51.2-.71 0s-.2-.51 0-.71l2.79-2.79c.57-.57 1.55-.57 2.12 0l2.79 2.79c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15m2-6h-11c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h11c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class FormkitCompressIcon {
  readonly viewBox = input("0 0 16 15")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
