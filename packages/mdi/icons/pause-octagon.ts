import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPauseOctagonIcon],svg[mdi-pause-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.73 3L21 8.27v7.46L15.73 21H8.27L3 15.73V8.27L8.27 3zM15 16V8h-2v8zm-4 0V8H9v8z"></svg:path>`,
})
export class MdiPauseOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
