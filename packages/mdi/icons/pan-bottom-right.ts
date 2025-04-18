import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPanBottomRightIcon],svg[mdi-pan-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m1 8.65L18.65 13l.35 6z"></svg:path>`,
})
export class MdiPanBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
