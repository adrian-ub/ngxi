import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddDiamondOutlineIcon],svg[material-symbols-add-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16h2v-3h3v-2h-3V8h-2v3H8v2h3zm1 6q-.4 0-.763-.137t-.637-.438l-7.975-8q-.275-.3-.45-.663T2 12t.175-.763t.45-.637l7.975-8q.3-.3.65-.45T12 2t.775.15t.65.45l7.95 8q.275.3.45.65T22 12t-.162.763t-.463.662l-7.95 8q-.275.275-.65.425T12 22m0-2l7.975-8L12 4l-7.975 8zm0-8"></svg:path>`,
})
export class MaterialSymbolsAddDiamondOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
