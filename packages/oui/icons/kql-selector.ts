import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiKqlSelectorIcon],svg[oui-kql-selector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 1A5 5 0 1 1 5 3a5 5 0 0 1 0 10m6-1a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 1a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class OuiKqlSelectorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
