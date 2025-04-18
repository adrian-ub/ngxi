import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHangerOffIcon],svg[tabler-hanger-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6a2 2 0 1 0-4 0m6.506 6.506l3.461 1.922a2 2 0 0 1 1.029 1.749V17m-2 2h-14a2 2 0 0 1-2-2v-.823a2 2 0 0 1 1.029-1.749l6.673-3.707M3 3l18 18"></svg:path>`,
})
export class TablerHangerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
