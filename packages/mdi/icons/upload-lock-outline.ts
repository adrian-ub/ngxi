import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUploadLockOutlineIcon],svg[mdi-upload-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-5c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1v-1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V16c.5 0 1 .5 1 1v4c0 .5-.5 1-1 1M5 18h9v2H5zm16-2v-1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V16zM9 16v-6H5l7-7l7 7h-4v6zm.83-8H11v6h2V8h1.17L12 5.83z"></svg:path>`,
})
export class MdiUploadLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
