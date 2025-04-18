import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMirrorVariantIcon],svg[mdi-mirror-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.29 10.28l3.24-3.25l1.06 1.06l-3.24 3.25zm.41 4.33l5.66-5.66L15.42 10l-5.66 5.67zM14.17 3L18 6.83v10.34L14.17 21H9.83L6 17.17V6.83L9.83 3zM15 1H9L4 6v12l5 5h6l5-5V6z"></svg:path>`,
})
export class MdiMirrorVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
