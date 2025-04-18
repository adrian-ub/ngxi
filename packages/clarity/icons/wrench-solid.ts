import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityWrenchSolidIcon],svg[clarity-wrench-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.73 27.72L19.67 13.66a8.79 8.79 0 0 0-12-10.5L13 8.53L8.53 13L3.16 7.67a8.79 8.79 0 0 0 10.5 12l14.06 14.06a1.07 1.07 0 0 0 1.5 0l4.51-4.51a1.07 1.07 0 0 0 0-1.5M29 29a1.38 1.38 0 1 1 0-2a1.38 1.38 0 0 1 0 2" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWrenchSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
