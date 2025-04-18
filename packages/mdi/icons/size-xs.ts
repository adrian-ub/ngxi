import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSizeXsIcon],svg[mdi-size-xs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7h2l1 2.5L10 7h2l-2 5l2 5h-2l-1-2.5L8 17H6l2-5zm9 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-4v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2"></svg:path>`,
})
export class MdiSizeXsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
