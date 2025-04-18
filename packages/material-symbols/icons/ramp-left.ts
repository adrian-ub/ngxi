import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRampLeftIcon],svg[material-symbols-ramp-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21V6.825L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825V9q0 1.6.663 2.937t1.6 2.375t1.962 1.788T19 17.275l-1.45 1.45q-1.425-.875-2.575-1.888T13 14.7V21z"></svg:path>`,
})
export class MaterialSymbolsRampLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
