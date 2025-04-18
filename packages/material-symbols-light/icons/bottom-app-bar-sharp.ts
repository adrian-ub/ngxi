import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBottomAppBarSharpIcon],svg[material-symbols-light-bottom-app-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm8-4.615q.589 0 .987-.399t.398-.986t-.398-.986t-.987-.398t-.986.398t-.398.986t.398.987t.986.398M5 14.5h4.692q-.269-1.096.443-1.99q.711-.895 1.865-.895t1.866.894t.442 1.991H19V5H5z"></svg:path>`,
})
export class MaterialSymbolsLightBottomAppBarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
