import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRollercoasterOffIcon],svg[tabler-rollercoaster-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.76 8.76 0 0 1 2.35-3.652m2.403-1.589A8.8 8.8 0 0 1 17.325 9H21m-1 0v7m0 4v1M8 21v-3m4 3v-9m4-2.5V12m0 4v5M15 3h5v3h-5zM9.446 5.415L10 5l2 2.5l-.285.213M9.447 9.415L8 10.5L6.2 10L6 8l1.139-.854M3 3l18 18"></svg:path>`,
})
export class TablerRollercoasterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
