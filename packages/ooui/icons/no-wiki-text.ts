import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiNoWikiTextIcon],svg[ooui-no-wiki-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3v2h1v10l2 2V3zM9 5V3H5l2 2zM1 1L0 2l1 1v14h3v-2H3V5l2 2v10h4v-2H7V9l6 6h-2v2h4l3 3l1-1zm12 10l2 2V3h-4v2h2z"></svg:path>`,
})
export class OouiNoWikiTextIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
