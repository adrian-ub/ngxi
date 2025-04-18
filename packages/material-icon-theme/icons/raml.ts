import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRamlIcon],svg[material-icon-theme-raml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M6 18.087a2 2 0 0 0-2-2a2 2 0 0 0 2-2v-6h4v-4H6a2 2 0 0 0-2 2v8H2v4h1.5a.5.5 0 0 1 .5.5v7.5a2 2 0 0 0 2 2h4v-4H6Zm22-3.999v-8a2 2 0 0 0-2-2h-4v4h4v6a2 2 0 0 0 2 2a2 2 0 0 0-2 2v6h-4v4h4a2 2 0 0 0 2-2v-8h2v-4Z"></svg:path><svg:rect width="4" height="4" x="10" y="14.088" fill="#42a5f5" rx=".5"></svg:rect><svg:rect width="4" height="4" x="18" y="14.088" fill="#42a5f5" rx=".5"></svg:rect>`,
})
export class MaterialIconThemeRamlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
