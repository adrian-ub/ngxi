import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMicrophone2OffIcon],svg[tabler-microphone-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.908 12.917a5 5 0 1 0-5.827-5.819m-.965 3.027l-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461-6.529M3 3l18 18"></svg:path>`,
})
export class TablerMicrophone2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
