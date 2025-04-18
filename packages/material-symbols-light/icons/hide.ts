import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHideIcon],svg[material-symbols-light-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.714 19.98L4 19.268l5.1-5.094H6.058v-1h4.75v4.75h-1v-3.042zm8.478-9.191v-4.75h1V9.08l5.095-5.1l.713.713l-5.1 5.095h3.042v1z"></svg:path>`,
})
export class MaterialSymbolsLightHideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
