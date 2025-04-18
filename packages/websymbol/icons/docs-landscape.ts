import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolDocsLandscapeIcon],svg[websymbol-docs-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M987 298v553H0V101h789zM158 693h671V377H711V259H158z"></svg:path>`,
})
export class WebsymbolDocsLandscapeIcon {
  readonly viewBox = input("0 0 989 1000")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
