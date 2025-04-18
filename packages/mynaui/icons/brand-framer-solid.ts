import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandFramerSolidIcon],svg[mynaui-brand-framer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2.25a.75.75 0 0 0-.522 1.289l5.17 5.011H5.5a.75.75 0 0 0-.75.75v6.3c0 .235.108.445.278.583l6.493 5.394A.75.75 0 0 0 12.75 21v-4.65h5.75a.75.75 0 0 0 .522-1.289l-5.17-5.011H18.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiBrandFramerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
