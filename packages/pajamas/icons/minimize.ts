import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasMinimizeIcon],svg[pajamas-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.78 2.28a.75.75 0 0 0-1.06-1.06L10.5 4.44V2.75a.75.75 0 0 0-1.5 0V7h4.25a.75.75 0 0 0 0-1.5h-1.69zM5.5 11.56v1.69a.75.75 0 0 0 1.5 0V9H2.75a.75.75 0 0 0 0 1.5h1.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasMinimizeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
