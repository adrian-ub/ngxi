import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramPlusIcon],svg[mdi-octagram-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l.51 1.22c-.52-.14-1.07-.22-1.63-.22c-3.31 0-6 2.69-6 6c0 .56.08 1.11.22 1.63L12 20.12L7.94 21.8l-1.68-4.06zM20 20h3v-2h-3v-3h-2v3h-3v2h3v3h2z"></svg:path>`,
})
export class MdiOctagramPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
