import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPanTopRightIcon],svg[mdi-pan-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m6.65 1L13 5.35L19 5z"></svg:path>`,
})
export class MdiPanTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
