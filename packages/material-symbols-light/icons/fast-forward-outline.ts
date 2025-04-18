import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFastForwardOutlineIcon],svg[material-symbols-light-fast-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.096 16.616V7.385L11.02 12zm8.885 0V7.385L19.904 12zM5.096 14.75L9.227 12l-4.13-2.75zm8.885 0L18.11 12l-4.13-2.75z"></svg:path>`,
})
export class MaterialSymbolsLightFastForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
