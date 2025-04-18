import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPanBottomLeftIcon],svg[mdi-pan-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-6.65 3L11 18.65L5 19z"></svg:path>`,
})
export class MdiPanBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
