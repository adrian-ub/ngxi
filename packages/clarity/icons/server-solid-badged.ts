import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityServerSolidBadgedIcon],svg[clarity-server-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10.3v1.2H12V10h11.8c-.5-.7-.8-1.5-1-2.4H12V6h10.5v-.1c0-1.4.4-2.7 1.1-3.9H9.5C8.7 2 8 2.7 8 3.5V34h20V13.1c-1.6-.5-3-1.4-4-2.8m-6 20.2c-1.5 0-2.8-1.2-2.8-2.8S16.5 25 18 25s2.8 1.2 2.8 2.8s-1.3 2.7-2.8 2.7m5-7.9H13V21h10z" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:circle cx="18" cy="27.8" r="1.2" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:circle><svg:circle cx="30" cy="5.9" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityServerSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
