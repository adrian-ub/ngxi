import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAnnotationPlusIcon],svg[mdi-format-annotation-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 7h2L16 21h-2.4l-1.1-3H6.3l-1.1 3H3zm-1.4 9h4.8L9.5 9.7zM22 5v2h-3v3h-2V7h-3V5h3V2h2v3z"></svg:path>`,
})
export class MdiFormatAnnotationPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
