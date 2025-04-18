import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityConnectSolidIcon],svg[clarity-connect-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12h-2.85a6.25 6.25 0 0 0-6.21 5H2v2h5.93a6.22 6.22 0 0 0 6.22 5H17Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M28.23 17A6.25 6.25 0 0 0 22 12h-3v12h3a6.22 6.22 0 0 0 6.22-5H34v-2Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityConnectSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
