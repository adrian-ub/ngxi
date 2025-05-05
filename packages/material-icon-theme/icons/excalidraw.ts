import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeExcalidrawIcon],svg[material-icon-theme-excalidraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="m15 1l-5 1l-9 10l3 3l10-9zm-4 3h1v1h-1zm1 5l-3 3l4 3l2-2zM7 4L4 7L2 5L1 1l4 1z"></svg:path>`,
})
export class MaterialIconThemeExcalidrawIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
