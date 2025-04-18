import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeElmIcon],svg[vscode-icons-file-type-elm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5fb4cb" d="M16 16.768L2.768 30h26.464Z"></svg:path><svg:path fill="#eea400" d="m24.13 23.362l5.87 5.87v-11.74Z"></svg:path><svg:path fill="#596277" d="M15.232 16L2 2.768v26.464Z"></svg:path><svg:path fill="#5fb4cb" d="M30 14.448V2H17.552Z"></svg:path><svg:path fill="#8cd636" d="m23.392 9.376l6.594 6.594l-6.624 6.624L16.768 16ZM2.768 2l6.095 6.1h13.248L16.016 2Z"></svg:path><svg:path fill="#eea400" d="m16 15.232l6.051-6.051H9.949Z"></svg:path>`,
})
export class VscodeIconsFileTypeElmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
