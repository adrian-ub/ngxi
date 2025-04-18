import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinkhubIcon],svg[arcticons-linkhub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.865 12.73l3.942-3.942a8.781 8.781 0 0 1 12.405 12.404l-5.635 5.615a8.74 8.74 0 0 1-12.362.023l-.023-.023"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.135 35.27l-3.942 3.942A8.781 8.781 0 0 1 8.788 26.808l5.635-5.615a8.74 8.74 0 0 1 12.362-.023l.023.023"></svg:path>`,
})
export class ArcticonsLinkhubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
