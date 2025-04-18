import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeSquareDotVerticalIcon],svg[tdesign-tree-square-dot-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h3v3h-3zm-2 2.5V9h7V2h-7v2.5h-3.667V11H9V8.5H2v7h7V13h2.333v6.5H15V22h7v-7h-7v2.5h-1.667v-11zM17 20v-3h3v3zM7 10.5v3H4v-3z"></svg:path>`,
})
export class TdesignTreeSquareDotVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
