import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesJumpingPersonSolidIcon],svg[bubbles-jumping-person-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m8.56.94a1.49 1.49 0 0 0-2.12 0l-1.71 1.71a1.5 1.5 0 0 1-1.52.35L9.55 5.58a4.48 4.48 0 0 0-4.3.87L3 8.36a1.516 1.516 0 0 0 2 2.28l2.21-1.91a1.46 1.46 0 0 1 1.43-.29l1.72.56a.26.26 0 0 1 .173.24a.2.2 0 0 1-.023.1l-2.42 5.51a.25.25 0 0 1-.23.15H2.5a1.5 1.5 0 1 0 0 3H9a1.49 1.49 0 0 0 1.37-.9l.73-1.65l3.49-.32a1.5 1.5 0 0 1 1.28.52l2 2.33a1.516 1.516 0 1 0 2.28-2l-2-2.32a4.47 4.47 0 0 0-3.83-1.55l-1.84.16l.93-2.12a.24.24 0 0 1 .3-.14l2.6.83a4.6 4.6 0 0 0 1.37.21a4.48 4.48 0 0 0 3.17-1.32l1.71-1.71a1.49 1.49 0 0 0 0-2.08"></svg:path>`,
})
export class BubblesJumpingPersonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
