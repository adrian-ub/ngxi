import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCompactOutlineIcon],svg[material-symbols-view-compact-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19.75V4.25h20v15.5zm2-11h2.5v-2.5H4zm4.5 0H11v-2.5H8.5zm4.5 0h2.5v-2.5H13zm4.5 0H20v-2.5h-2.5zm0 4.5H20v-2.5h-2.5zm-4.5 0h2.5v-2.5H13zm-4.5 0H11v-2.5H8.5zm-2-2.5H4v2.5h2.5zm11 7H20v-2.5h-2.5zm-4.5 0h2.5v-2.5H13zm-4.5 0H11v-2.5H8.5zm-4.5 0h2.5v-2.5H4z"></svg:path>`,
})
export class MaterialSymbolsViewCompactOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
