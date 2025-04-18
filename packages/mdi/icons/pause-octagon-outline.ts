import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPauseOctagonOutlineIcon],svg[mdi-pause-octagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16h-2V8h2zm-4 0H9V8h2zm4.73-13L21 8.27v7.46L15.73 21H8.27L3 15.73V8.27L8.27 3zm-.83 2H9.1L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1z"></svg:path>`,
})
export class MdiPauseOctagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
