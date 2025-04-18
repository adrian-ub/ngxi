import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiMonzoIcon],svg[cbi-monzo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.991 16.726H12l5.328-5.32v9.92a.404.404 0 0 0 .683.278l4.474-4.465a1 1 0 0 0 .288-.719V5.97l.009-.008l-3.576-3.567a.395.395 0 0 0-.566 0L12 9.025L5.342 2.378a.395.395 0 0 0-.566 0L1.218 5.962h.01h-.01v10.476a1 1 0 0 0 .288.71l4.465 4.474a.404.404 0 0 0 .683-.287l.009-9.937l5.328 5.337z"></svg:path>`,
})
export class CbiMonzoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
