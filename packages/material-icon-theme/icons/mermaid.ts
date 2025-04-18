import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeMermaidIcon],svg[material-icon-theme-mermaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff4081" d="M56.954 11.425C45.907 10.952 35.763 17.749 32 28.146C28.236 17.749 18.093 10.952 7.046 11.425a25.46 25.46 0 0 0 11.073 22.072a13.66 13.66 0 0 1 5.92 11.286v7.815h15.924v-7.815a13.66 13.66 0 0 1 5.92-11.286a25.44 25.44 0 0 0 11.072-22.072z"></svg:path>`,
})
export class MaterialIconThemeMermaidIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
