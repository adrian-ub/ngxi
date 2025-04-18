import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilterCenterFocusSharpIcon],svg[material-symbols-light-filter-center-focus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-5h1v4h4v1zm11 0v-1h4v-4h1v5zM4 9V4h5v1H5v4zm15 0V5h-4V4h5v5zm-7 5q-.846 0-1.423-.577T10 12t.577-1.423T12 10t1.423.577T14 12t-.577 1.423T12 14"></svg:path>`,
})
export class MaterialSymbolsLightFilterCenterFocusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
