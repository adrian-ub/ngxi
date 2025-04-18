import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetsOutlineIcon],svg[material-symbols-widgets-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.65 13L11 7.35l5.65-5.65l5.65 5.65zM3 11V3h8v8zm10 10v-8h8v8zM3 21v-8h8v8zM5 9h4V5H5zm11.675 1.2L19.5 7.375L16.675 4.55L13.85 7.375zM15 19h4v-4h-4zM5 19h4v-4H5zm10-4"></svg:path>`,
})
export class MaterialSymbolsWidgetsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
