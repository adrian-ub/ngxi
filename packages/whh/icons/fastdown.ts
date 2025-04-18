import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFastdownIcon],svg[whh-fastdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M557.976 590q-18 18-45 18t-45-18l-448-452q-19-19-19-46t19-45l26-28q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 28q19 18 19 45t-19 46zm-512-155q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 27q19 19 19 45.5t-19 45.5l-448 452q-18 19-45 19t-45-19l-448-452q-19-19-19-45.5t19-45.5z"></svg:path>`,
})
export class WhhFastdownIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
