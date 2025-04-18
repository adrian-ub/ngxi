import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMicrophone2Icon],svg[tabler-microphone-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12.9A5 5 0 1 0 11.098 9M15 12.9l-3.902-3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83z"></svg:path>`,
})
export class TablerMicrophone2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
