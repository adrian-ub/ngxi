import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatQuoteOpenIcon],svg[mdi-light-format-quote-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18v-8l1.95-4h4.2L9.2 10H11v8zm1-7.77V17h4v-6H7.6l1.95-4H7.58zM12 18v-8l1.95-4h4.2l-1.95 4H18v8zm1-7.77V17h4v-6h-2.4l1.95-4h-1.97z"></svg:path>`,
})
export class MdiLightFormatQuoteOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
