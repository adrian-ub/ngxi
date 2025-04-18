import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCompassSolidIcon],svg[clarity-compass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2M6.47 19H4.05c0-.33-.05-.66-.05-1s0-.67.05-1h2.42ZM17 4.05c.33 0 .66-.05 1-.05s.67 0 1 .05v2.42h-2Zm2 27.9c-.33 0-.66.05-1 .05s-.67 0-1-.05v-2.42h2Zm8-5.58a.59.59 0 0 1-.69.16l-10.56-6.15L9.6 9.82c-.25-.47.39-1.1.86-.84l10.37 6.33l6.33 10.37a.59.59 0 0 1-.16.69M29.53 19v-2h2.42c0 .33.05.66.05 1s0 .67-.05 1Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="m16.77 19.35l7.58 4.42l-4.55-7.44z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCompassSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
