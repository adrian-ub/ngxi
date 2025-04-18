import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUploadLockIcon],svg[mdi-upload-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-5c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1v-1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V16c.5 0 1 .5 1 1v4c0 .5-.5 1-1 1m-8-2H5v-2h9zm7-4v-1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V16zm-6 0H9v-6H5l7-7l7 7h-4z"></svg:path>`,
})
export class MdiUploadLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
