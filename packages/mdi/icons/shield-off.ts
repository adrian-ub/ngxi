import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldOffIcon],svg[mdi-shield-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L20.5 21.22l-1.27 1.28L17 20.25c-1.43 1.32-3.13 2.29-5 2.75c-5.16-1.26-9-6.45-9-12V6.27zM12 1l9 4v6c0 2.28-.65 4.5-1.77 6.41L5.65 3.82z"></svg:path>`,
})
export class MdiShieldOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
