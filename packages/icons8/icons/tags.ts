import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8TagsIcon],svg[icons8-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.594 4l-.313.28l-11 11l-.685.72l.687.72l9 9l.72.686l.72-.687l11-11l.28-.315V4zm.844 2H23v7.563l-10 10L5.437 16zM26 7v2h1v8.156l-9.5 9.438l-1.25-1.25l-1.406 1.406l1.937 1.97l.72.686l.69-.687L28.72 18.31L29 18V7zm-6 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class Icons8TagsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
