import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsCameraIcon],svg[radix-icons-camera-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2 .25A.25.25 0 0 1 2.25 4h2.5a.25.25 0 0 1 .25.25v1.505a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25zm10.101 3.334a2.601 2.601 0 1 1-5.202 0a2.601 2.601 0 0 1 5.202 0m1 0a3.601 3.601 0 1 1-7.202 0a3.601 3.601 0 0 1 7.202 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsCameraIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
