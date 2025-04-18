import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFoldUpIcon],svg[codicon-fold-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7.4l.7.7l6-6l6 6l.7-.7L8.1 1h-.7zm0 6l.7.7l6-6l6 6l.7-.7L8.1 7h-.7z"></svg:path>`,
})
export class CodiconFoldUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
