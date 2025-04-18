import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageAreaCloseIcon],svg[mdi-image-area-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l-4-4h8zm8-20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 14h14l-4.5-6l-3.5 4.5l-2.5-3z"></svg:path>`,
})
export class MdiImageAreaCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
