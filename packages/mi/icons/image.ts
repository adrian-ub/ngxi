import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miImageIcon],svg[mi-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm16 0H5v7.92l3.375-2.7a1 1 0 0 1 1.25 0l4.3 3.44l1.368-1.367a1 1 0 0 1 1.414 0L19 14.586zM5 19h14v-1.586l-3-3l-1.293 1.293a1 1 0 0 1-1.332.074L9 12.28l-4 3.2z"></svg:path></svg:g>`,
})
export class MiImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
