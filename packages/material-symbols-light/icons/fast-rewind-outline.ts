import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFastRewindOutlineIcon],svg[material-symbols-light-fast-rewind-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.904 16.616L12.98 12l6.923-4.615zm-8.885 0L4.096 12l6.923-4.615zm-1-1.866v-5.5L5.89 12zm8.885 0v-5.5L14.773 12z"></svg:path>`,
})
export class MaterialSymbolsLightFastRewindOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
