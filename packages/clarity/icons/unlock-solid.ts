import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityUnlockSolidIcon],svg[clarity-unlock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 2a8.2 8.2 0 0 0-8 8.36V15H2v17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15h-4v-4.64A6.2 6.2 0 0 1 26 4a6.2 6.2 0 0 1 6 6.36v6.83a1 1 0 0 0 2 0v-6.83A8.2 8.2 0 0 0 26 2M14 25.23V28h-2v-2.86a2.4 2.4 0 1 1 2 .09" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnlockSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
