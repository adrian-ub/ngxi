import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkOffIcon],svg[mdi-bookmark-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20.72L18.73 22l-1.95-1.95L12 18l-7 3V8.27l-3-3L3.28 4zm-1-3.56V5a2 2 0 0 0-2-2H7c-.59 0-1.11.27-1.5.68z"></svg:path>`,
})
export class MdiBookmarkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
