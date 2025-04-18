import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSnowyLineIcon],svg[ri-snowy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 16.268l1.964-1.134l1 1.732L14 18l1.964 1.134l-1 1.732L13 19.732V22h-2v-2.268l-1.964 1.134l-1-1.732L10 18l-1.964-1.134l1-1.732L11 16.268V14h2zM17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18z"></svg:path>`,
})
export class RiSnowyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
