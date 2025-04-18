import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFileWordIcon],svg[fe-file-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m9 2H6v16h12V7h-3zm-8 8h2l1 3l1-3h2l1 3l1-3h2l-2 6h-2l-1-3l-1 3H9z"></svg:path>`,
})
export class FeFileWordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
