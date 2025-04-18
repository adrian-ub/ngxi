import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityLightningSolidIcon],svg[clarity-lightning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.8 2.29a.49.49 0 0 0-.45-.29H16.42a.5.5 0 0 0-.42.23l-10.71 17a.49.49 0 0 0 .41.77h7.67L6.6 33.25a.52.52 0 0 0 .46.75h3a.5.5 0 0 0 .37-.16L28 14.85a.5.5 0 0 0-.37-.85h-6.74l9.83-11.18a.49.49 0 0 0 .08-.53" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityLightningSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
