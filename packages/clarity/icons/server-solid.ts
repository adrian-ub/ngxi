import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityServerSolidIcon],svg[clarity-server-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.5 2h-17C8.7 2 8 2.7 8 3.5V34h20V3.5c0-.8-.7-1.5-1.5-1.5M18 30.5c-1.5 0-2.8-1.2-2.8-2.8S16.5 25 18 25s2.8 1.2 2.8 2.8s-1.3 2.7-2.8 2.7m5-7.9H13V21h10zm1-11H12V10h12zm0-4H12V6h12z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:circle cx="18" cy="27.8" r="1.2" fill="currentColor" class="clr-i-solid clr-i-solid-path-2"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityServerSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
