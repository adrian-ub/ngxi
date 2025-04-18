import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityDeploySolidIcon],svg[clarity-deploy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 2H22.1a1 1 0 0 0 0 2h8.53l-8.82 9a1 1 0 1 0 1.43 1.4L32 5.46v8.44a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M12.46 10.73a1 1 0 0 0-1 0l-8.68 5L12 21l9.19-5.26Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M2 27.73a1 1 0 0 0 .5.87l8.5 4.86v-11l-9-5.18Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="m13 33.46l8.5-4.86a1 1 0 0 0 .5-.87V17.29l-9 5.15Z" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityDeploySolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
