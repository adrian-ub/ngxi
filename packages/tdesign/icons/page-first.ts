import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPageFirstIcon],svg[tdesign-page-first-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 5v14h-2V5zm9.164 1.75L12.414 12l5.25 5.25l-1.414 1.414L9.586 12l6.664-6.664z"></svg:path>`,
})
export class TdesignPageFirstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
