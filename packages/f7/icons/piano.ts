import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PianoIcon],svg[f7-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 31h-1a1 1 0 0 1-1-1V7h-5v23a1 1 0 0 1-1 1h-1v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2zm2 0v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V31h-1a1 1 0 0 1-1-1V7h-5v23a1 1 0 0 1-1 1zm-13 0h-1a1 1 0 0 1-1-1V7H9a2 2 0 0 0-2 2v38a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2zM42 7v23a1 1 0 0 1-1 1h-1v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM7 3h42a4 4 0 0 1 4 4v42a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4"></svg:path>`,
})
export class F7PianoIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
