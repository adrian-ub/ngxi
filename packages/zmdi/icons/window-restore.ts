import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWindowRestoreIcon],svg[zmdi-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 107h85V21h256v256h-85v86H0zm256 0v128h43V64H128v43zM43 192v128h170V192z"></svg:path>`,
})
export class ZmdiWindowRestoreIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
