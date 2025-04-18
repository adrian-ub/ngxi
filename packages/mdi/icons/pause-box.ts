import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPauseBoxIcon],svg[mdi-pause-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-8 13H9V8h2zm4 0h-2V8h2z"></svg:path>`,
})
export class MdiPauseBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
