import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCodeMutedLineIcon],svg[si-code-muted-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 8l-4 4l4 4m6 0l4-4l-4-4"></svg:path>`,
})
export class SiCodeMutedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
