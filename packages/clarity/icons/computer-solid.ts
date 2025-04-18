import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityComputerSolidIcon],svg[clarity-computer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.81 26c-.35.9-.94 1.5-1.61 1.5h-8.46c-.68 0-1.26-.6-1.61-1.5H1v1.75A2.45 2.45 0 0 0 3.6 30h28.8a2.45 2.45 0 0 0 2.6-2.25V26Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M7 10h22v14h3V7.57A1.54 1.54 0 0 0 30.5 6h-25A1.54 1.54 0 0 0 4 7.57V24h3Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityComputerSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
