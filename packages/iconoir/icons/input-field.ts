import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirInputFieldIcon],svg[iconoir-input-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m1 2.5h1.5m1.5 0H6.5m0 0v7m0 0H5m1.5 0H8"></svg:path>`,
})
export class IconoirInputFieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
