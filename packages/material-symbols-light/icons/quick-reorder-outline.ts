import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightQuickReorderOutlineIcon],svg[material-symbols-light-quick-reorder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.327 19v-1h4.346v-2.5H3.327v-1h3.346V12H4.377v-1h2.296V8.089L4.916 4.235l.915-.427L7.758 8h11.83l-1.872-3.958l.915-.427L20.673 8v11zm9.346-6.5h4q.213 0 .356-.144t.144-.357t-.144-.356t-.356-.143h-4q-.212 0-.356.144t-.144.357t.144.356t.356.143m-4 5.5h12V9h-12zm0 0V9z"></svg:path>`,
})
export class MaterialSymbolsLightQuickReorderOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
