import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityLockSolidIcon],svg[clarity-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 15v-4.28a8.2 8.2 0 0 0-8-8.36a8.2 8.2 0 0 0-8 8.36V15H7v17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15Zm-7 10.23V28h-2v-2.86a2.4 2.4 0 1 1 2 .09M24 15H12v-4.28a6.2 6.2 0 0 1 6-6.36a6.2 6.2 0 0 1 6 6.36Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityLockSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
