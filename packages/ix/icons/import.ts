import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixImportIcon],svg[ix-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.333V448H64V170.666h42.667v234.667h298.667V128H320V85.333zm-277.333 0c57.36 0 104.145 45.276 106.568 102.04l.099 4.627l-.001 76.485l48.916-48.904l30.17 30.17L256 350.17L155.582 249.75l30.17-30.17l48.915 48.904V192c0-34.084-26.644-61.945-60.24-63.892l-3.76-.108h-128V85.333z"></svg:path>`,
})
export class IxImportIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
