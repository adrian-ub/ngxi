import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatCommentIcon],svg[topcoat-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.5 30.5h7c2.529 0 3-.529 3-3v-21c0-2.41-.59-3-3-3h-32c-2.47 0-3 .53-3 3v20.971c0 2.469.41 3.029 3 3.029h13s9.562 8.756 10.75 9.812c.422.375 1.281.172 1.25-.812zm-22-9h21v3h-21zm0-6h13v3h-13zm0-6h26v3h-26z"></svg:path>`,
})
export class TopcoatCommentIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
