import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDeleteKeyboardIcon],svg[streamline-delete-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.813 10.176a2 2 0 0 0 1.523.703h5.556a2 2 0 0 0 2-2V5.12a2 2 0 0 0-2-2H5.336a2 2 0 0 0-1.523.704l-1.6 1.88a2 2 0 0 0 0 2.593zm2.584-4.989l3.584 3.584M9.98 5.187L6.398 8.771"></svg:path>`,
})
export class StreamlineDeleteKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
