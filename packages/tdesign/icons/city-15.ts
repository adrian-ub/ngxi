import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity15Icon],svg[tdesign-city-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2v20h20V10.687L14 9.02zm-2 6.604L8 7.77V20H4V4h8zM10 20v-9.77l10 2.083V20h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignCity15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
