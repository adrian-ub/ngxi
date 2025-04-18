import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNoCreditCardLineIcon],svg[ri-no-credit-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.586 21l1.607 1.607l1.414-1.415l-19.8-19.799l-1.413 1.415l.726.726A1 1 0 0 0 2.005 4v16a1 1 0 0 0 1 1zm-2-2H4.005v-7h6.58zm-11-11H4.005V5.419zm15.419-4v13.762l-2-2V12h-3.762l-4-4h7.762V5H9.243l-2-2h13.762a1 1 0 0 1 1 1"></svg:path>`,
})
export class RiNoCreditCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
