import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiWikiTextIcon],svg[ooui-wiki-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v14h3v-2H3V5h1V3zm4 0v14h4v-2H7V5h2V3zm11 0v2h1v10h-1v2h3V3zm-5 0v2h2v10h-2v2h4V3z"></svg:path>`,
})
export class OouiWikiTextIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
