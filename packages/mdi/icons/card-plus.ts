import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardPlusIcon],svg[mdi-card-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16c1.11 0 2 .89 2 2v7.81c-.88-.51-1.91-.81-3-.81c-3.31 0-6 2.69-6 6c0 .34.04.67.09 1M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiCardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
