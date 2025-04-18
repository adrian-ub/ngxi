import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBallIcon],svg[bxs-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.247 3.034c-.069-.018-1.742-.433-4.052-.433c-2.842 0-6.868.64-9.91 3.687c-5.34 5.349-3.34 13.61-3.252 13.96a1 1 0 0 0 .728.726c.069.018 1.726.426 4.018.426c2.849 0 6.884-.641 9.932-3.688c5.335-5.335 3.351-13.6 3.264-13.949a1 1 0 0 0-.728-.729m-3.537 9.262l-1.414 1.414l-1.793-1.792l-1.586 1.586l1.792 1.793l-1.414 1.414l-1.792-1.793l-1.793 1.793l-1.414-1.414l1.793-1.793l-1.793-1.794l1.414-1.414l1.793 1.794l1.586-1.586l-1.794-1.793l1.414-1.414l1.794 1.793l1.793-1.793l1.414 1.414l-1.793 1.793z"></svg:path>`,
})
export class BxsBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
