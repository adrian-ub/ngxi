import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTapeDriveSolidIcon],svg[clarity-tape-drive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2 18H6V12h24Z"></svg:path><svg:path fill="currentColor" d="M12.21 23a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0-7a2 2 0 1 1-2 2a2 2 0 0 1 2-2m11.58 7a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0-7a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path>`,
})
export class ClarityTapeDriveSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
