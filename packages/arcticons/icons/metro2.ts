import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetro2Icon],svg[arcticons-metro2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 42.383h-9a4 4 0 0 1-4-4V9.617a4 4 0 0 1 4-4h.374a3 3 0 0 1 2.204.965l5.361 5.808a4 4 0 0 1 1.061 2.713z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.874 5.617h13a3 3 0 0 1 2.204.965l5.361 5.808a4 4 0 0 1 1.061 2.713v27.28h-13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.874 5.617h13a3 3 0 0 1 2.204.965l5.361 5.808a4 4 0 0 1 1.061 2.713v23.28a4 4 0 0 1-4 4h-9"></svg:path>`,
})
export class ArcticonsMetro2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
