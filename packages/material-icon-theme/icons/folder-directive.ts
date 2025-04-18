import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDirectiveIcon],svg[material-icon-theme-folder-directive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="m6.922 3.768l-.644-.536A1 1 0 0 0 5.638 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7.562a1 1 0 0 1-.64-.232"></svg:path><svg:g fill="#ffcdd2"><svg:path d="m11.5 6.001l-1.5 2h3z"></svg:path><svg:path d="M11 7v2h1V7zm-1 3H8v1.001h2z"></svg:path><svg:path d="m9 9l-2 1.5L9 12zm2 3h1v2h-1Z"></svg:path><svg:path d="m10 13l1.5 2l1.5-2Zm3-3v1.001h2v-1Z"></svg:path><svg:path d="m14 9l2 1.5l-2 1.5Z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderDirectiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
