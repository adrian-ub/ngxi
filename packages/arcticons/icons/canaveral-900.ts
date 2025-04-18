import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCanaveral900Icon],svg[arcticons-canaveral-900-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 36.801l37-4.117m-28.08 2.969c-5.704-5.321-6.015-14.26-.694-19.964c5.321-5.705 14.26-6.015 19.964-.694a14.125 14.125 0 0 1 2.126 18.152"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.058 16.409c4.92 0 8.913 3.993 8.913 8.92a8.91 8.91 0 0 1-8.91 8.914h-.003c-4.927 0-8.92-3.987-8.92-8.914s3.993-8.92 8.92-8.92q0 0 0 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.104 21.49a3.901 3.901 0 0 1 .004 7.802h-.004a3.9 3.9 0 0 1-3.893-3.901a3.9 3.9 0 0 1 3.894-3.901z"></svg:path>`,
})
export class ArcticonsCanaveral900Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
