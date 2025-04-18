import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBellRinging2Icon],svg[tabler-bell-ringing-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1-1.414 7.072l-2.122 2.12a4 4 0 0 0-.707 3.536L3.808 8.88a4 4 0 0 0 3.535-.707L9.464 6.05a7 7 0 0 1 7.072-1.414a2 2 0 0 1 2.828 0"></svg:path><svg:path d="m7.343 12.414l-.707.707a3 3 0 0 0 4.243 4.243l.707-.707"></svg:path></svg:g>`,
})
export class TablerBellRinging2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
