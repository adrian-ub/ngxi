import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLittleFileExplorerIcon],svg[arcticons-little-file-explorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 17.329v22.579h-39V17.329m35.921-3.079H43.5v3.079h-3.079zM4.5 11.171h3.079v6.158H4.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.974 8.093v3.079H7.579V8.093z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.973 11.171v3.079H7.578v-3.079zm.001 0h17.447v3.079"></svg:path>`,
})
export class ArcticonsLittleFileExplorerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
