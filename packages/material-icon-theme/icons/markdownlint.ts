import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeMarkdownlintIcon],svg[material-icon-theme-markdownlint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M6 5L4 6.75L2 5H1v6h2V8l1 1l1-1v3h2V5zm4.73 3.975L10 8H8l2 3h2l3-6h-2z"></svg:path>`,
})
export class MaterialIconThemeMarkdownlintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
