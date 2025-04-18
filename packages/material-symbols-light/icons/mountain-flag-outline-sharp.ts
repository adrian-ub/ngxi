import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMountainFlagOutlineSharpIcon],svg[material-symbols-light-mountain-flag-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.489 13.387l1.547 1.04L12 13.433l1.964.994l1.536-1.029L14.308 11H9.65zM5.225 20H18.75l-2.812-5.687l-1.902 1.26L12 14.567l-2.036 1.006l-1.933-1.285zm-1.61 1l5.42-11H11.5V3h5.692l-.75 1.5l.75 1.5H12.5v4h2.385l5.5 11z"></svg:path>`,
})
export class MaterialSymbolsLightMountainFlagOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
