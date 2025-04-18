import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCommandSolidIcon],svg[clarity-command-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M6.8 15.81v-2.64l10 4.59v2.08l-10 4.59v-2.65l6.51-3Zm16.6 9.59H17V23h6.4ZM4 9.2V7h28v2.2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCommandSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
