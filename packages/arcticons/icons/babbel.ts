import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBabbelIcon],svg[arcticons-babbel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.456 24a4.823 4.823 0 0 1 4.868 5.91a7.356 7.356 0 0 1-6.952 5.91h-9.751l4.168-23.639h9.751a4.823 4.823 0 0 1 4.868 5.91A7.356 7.356 0 0 1 36.456 24m0 0h-9.751m-6.495 0H4.5m8.661-4.568l.579-3.287m-2.77 15.71L12.355 24"></svg:path>`,
})
export class ArcticonsBabbelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
