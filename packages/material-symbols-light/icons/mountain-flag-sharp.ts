import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMountainFlagSharpIcon],svg[material-symbols-light-mountain-flag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.64 12.825L9.036 10H11.5V3h5.692l-.75 1.5l.75 1.5H12.5v4h2.385l1.424 2.87l-2.346 1.557L12 13.433l-1.964.994zM3.616 21l3.587-7.279l2.762 1.852L12 14.567l2.036 1.006l2.731-1.802L20.385 21z"></svg:path>`,
})
export class MaterialSymbolsLightMountainFlagSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
