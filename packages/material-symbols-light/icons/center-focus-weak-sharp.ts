import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCenterFocusWeakSharpIcon],svg[material-symbols-light-center-focus-weak-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15q-1.237 0-2.119-.881T9 12t.881-2.119T12 9t2.119.881T15 12t-.881 2.119T12 15m-8 5v-5h1v4h4v1zm11 0v-1h4v-4h1v5zM4 9V4h5v1H5v4zm15 0V5h-4V4h5v5z"></svg:path>`,
})
export class MaterialSymbolsLightCenterFocusWeakSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
