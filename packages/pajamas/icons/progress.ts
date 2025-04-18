import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasProgressIcon],svg[pajamas-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5.5h8a2.5 2.5 0 0 1 0 5H4a2.5 2.5 0 0 1 0-5M0 8a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H4a4 4 0 0 1-4-4m4-1a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasProgressIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
