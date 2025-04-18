import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSipIcon],svg[tdesign-sip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.781 8.132A3.424 3.424 0 1 0 15.94 3.29l-1.748 1.748l-1.286-1.285l-1.414 1.414l1.286 1.285L2.072 17.157v4.842h4.843l10.704-10.704l1.285 1.286l1.415-1.415l-1.286-1.285zm-4.576 1.749L6.086 19.999H4.072v-2.014L14.191 7.867zm-.6-3.429l1.748-1.748a1.424 1.424 0 1 1 2.014 2.014L17.62 8.466z"></svg:path>`,
})
export class TdesignSipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
