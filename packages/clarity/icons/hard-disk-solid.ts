import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHardDiskSolidIcon],svg[clarity-hard-disk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.86 8.43A2 2 0 0 0 28.94 7H7.06a2 2 0 0 0-1.93 1.47L2.29 20h31.42Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M2 22v7a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7Zm28 5h-4v-2h4Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityHardDiskSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
