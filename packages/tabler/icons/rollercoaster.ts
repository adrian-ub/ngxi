import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRollercoasterIcon],svg[tabler-rollercoaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.775 8.775 0 0 1 8.325-6H21m-1 0v12M8 21v-3m4 3V11m4-1.5V21M15 3h5v3h-5zM6 8l4-3l2 2.5l-4 3l-1.8-.5z"></svg:path>`,
})
export class TablerRollercoasterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
