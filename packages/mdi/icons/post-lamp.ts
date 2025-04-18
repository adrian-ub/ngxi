import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPostLampIcon],svg[mdi-post-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 3l-1-2h-2l-1 2l-5 3h2l1 8l2 2l.5 1H9v6h6v-6h-1.5l.5-1l2-2l1-8h2zm.16 10H9.84L9 6h6z"></svg:path>`,
})
export class MdiPostLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
