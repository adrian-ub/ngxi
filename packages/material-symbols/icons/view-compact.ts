import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCompactIcon],svg[material-symbols-view-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.75V4.25zm-20-11v-4.5h4.25v4.5zm5.25 0v-4.5h4.25v4.5zm5.25 0v-4.5h4.25v4.5zm5.25 0v-4.5H22v4.5zm0 5.5v-4.5H22v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm15.75 5.5v-4.5H22v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5z"></svg:path>`,
})
export class MaterialSymbolsViewCompactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
