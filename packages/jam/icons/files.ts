import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFilesIcon],svg[jam-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h3l3 3v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm0-2V7a2 2 0 0 1 2-2h2V2H2v11zm8.172-6H8v11h8V8.828z"></svg:path>`,
})
export class JamFilesIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
