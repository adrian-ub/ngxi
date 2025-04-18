import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSnowyFillIcon],svg[ri-snowy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.027 17.43A8.003 8.003 0 0 1 9 2a8 8 0 0 1 7.458 5.099A5.5 5.5 0 1 1 18 17.978a6 6 0 0 0-11.973-.549M13 16.267l1.964-1.134l1 1.732L14 18l1.964 1.134l-1 1.732L13 19.732V22h-2v-2.268l-1.964 1.134l-1-1.732L10 18l-1.964-1.134l1-1.732L11 16.268V14h2z"></svg:path>`,
})
export class RiSnowyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
