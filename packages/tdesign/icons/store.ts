import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignStoreIcon],svg[tdesign-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2.5h17v2h-17zm-.82 3h18.64l1.18 5.901V13.5H21v8h-2v-8h-5v8H3v-8H1.5v-2.099zm2.32 8v6h7v-6zm15.48-2l-.8-4H4.32l-.8 4z"></svg:path>`,
})
export class TdesignStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
