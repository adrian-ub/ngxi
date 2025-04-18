import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiAppearanceIcon],svg[ooui-appearance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.2 9a4.25 4.25 0 0 1 7.9-.6a2.8 2.8 0 0 1 1.8 0a4.25 4.25 0 0 1 7.9.6a1.01 1.01 0 1 1 .1 2a4.23 4.23 0 0 1-8.4-.6a1 1 0 0 0-1 0a4.23 4.23 0 0 1-8.4.6a1.01 1.01 0 1 1 .1-2m4.05-1a2.25 2.25 0 0 0 0 4.5a2.25 2.25 0 0 0 0-4.5m9.5 0a2.25 2.25 0 0 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class OouiAppearanceIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
