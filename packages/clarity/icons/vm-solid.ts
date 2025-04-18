import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityVmSolidIcon],svg[clarity-vm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.59 12a3.6 3.6 0 0 1 3.6-3.6H27V5a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v8.4h4.59Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M30 10H17.19a2 2 0 0 0-2 2v1.4H20a3.6 3.6 0 0 1 3.6 3.6v8H22v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.4h-4.81a3.6 3.6 0 0 1-3.6-3.6v-6h1.6v6a2 2 0 0 0 2 2H30a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
