import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPanTopLeftIcon],svg[mdi-pan-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1-4.65L5.35 11L5 5z"></svg:path>`,
})
export class MdiPanTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
