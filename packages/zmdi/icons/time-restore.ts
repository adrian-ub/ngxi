import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTimeRestoreIcon],svg[zmdi-time-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0q80 0 136 56t56 136t-56 136t-136 56q-79 0-136-56l31-31q43 44 105 44t105.5-43.5T405 192T361.5 86.5T256 43T150.5 86.5T107 192h64l-87 86l-1-3l-83-83h64q0-80 56-136T256 0m-21 107h32v90l74 45l-15 26l-91-55z"></svg:path>`,
})
export class ZmdiTimeRestoreIcon {
  readonly viewBox = input("0 0 448 384")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
