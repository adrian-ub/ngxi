import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeMarkdocIcon],svg[material-icon-theme-markdoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909c" d="m14 10l-4 3.5L6 10H4v12h4v-6l2 2l2-2v6h4V10Z"></svg:path><svg:rect width="6" height="16" x="22" y="8" fill="#ffb300" rx=".5"></svg:rect>`,
})
export class MaterialIconThemeMarkdocIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
