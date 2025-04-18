import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTapeDriveLineIcon],svg[clarity-tape-drive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 28V8h28v20Z"></svg:path><svg:path fill="currentColor" d="M13.33 13.35a4.52 4.52 0 1 0 4.53 4.52a4.53 4.53 0 0 0-4.53-4.52m0 7.44a2.92 2.92 0 1 1 2.93-2.92a2.92 2.92 0 0 1-2.93 2.92m10.29-7.44a4.52 4.52 0 1 0 4.52 4.52a4.53 4.53 0 0 0-4.52-4.52m0 7.44a2.92 2.92 0 1 1 2.92-2.92a2.92 2.92 0 0 1-2.92 2.92"></svg:path><svg:path fill="currentColor" d="M6 11v12.55h2V12h21.34v-2H7a1 1 0 0 0-1 1"></svg:path>`,
})
export class ClarityTapeDriveLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
