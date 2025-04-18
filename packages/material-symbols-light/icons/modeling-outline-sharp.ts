import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightModelingOutlineSharpIcon],svg[material-symbols-light-modeling-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.866 19.289l-3.347-3.308l3.346-3.308l.689.708l-2.113 2.1H21v1h-4.56l2.114 2.1zM3 19v-6.038h9.173V19zm1-1h7.173v-4.038H4zm2.135-6.692l-.689-.708L7.56 8.5H3v-1h4.56L5.446 5.4l.688-.688L9.481 8zm5.692-.27V5H21v6.039zm1-1H20V6h-7.173zM11.173 18v-4.038zm1.654-7.961V6z"></svg:path>`,
})
export class MaterialSymbolsLightModelingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
