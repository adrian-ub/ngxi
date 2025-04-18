import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTerminalLineIcon],svg[clarity-terminal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h28v2.2H4Zm0 22V10.8h28V29Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M17 23h6v2h-6z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="m7 15.68l6.79 3.12L7 21.91v2.2l9.6-4.41v-1.81L7 13.48z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTerminalLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
