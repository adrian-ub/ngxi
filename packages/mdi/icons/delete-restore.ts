import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteRestoreIcon],svg[mdi-delete-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14h2l-4-4l-4 4h2v4h4zM6 7h12v12c0 .5-.2 1-.61 1.39c-.39.41-.89.61-1.39.61H8c-.5 0-1-.2-1.39-.61C6.2 20 6 19.5 6 19zm13-3v2H5V4h3.5l1-1h5l1 1z"></svg:path>`,
})
export class MdiDeleteRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
