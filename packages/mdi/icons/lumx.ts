import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLumxIcon],svg[mdi-lumx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.35 1.75l7.78 7.78l-6.36 6.36l-1.42-1.42l4.95-4.94l-6.36-6.37zm3.54 7.78l-1.42 1.41l-4.24-4.24l-4.95 4.95l-1.41-1.42l6.36-6.36zm-5.66-1.42l1.42 1.42l-4.95 4.94l6.36 6.37l-1.41 1.41l-7.78-7.78zm-2.12 6.36l1.42-1.41l4.24 4.24l4.95-4.95l1.41 1.42l-6.36 6.36z"></svg:path>`,
})
export class MdiLumxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
