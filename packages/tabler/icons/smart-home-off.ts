import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSmartHomeOffIcon],svg[tabler-smart-home-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.097 7.125L5.06 8.71a2.67 2.67 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12c.559 0 1.064-.229 1.427-.598M20.03 16v-5.185c0-.823-.38-1.6-1.03-2.105l-5.333-4.148a2.666 2.666 0 0 0-3.274 0l-1.029.8"></svg:path><svg:path d="M15.332 15.345c-2.213.976-5.335.86-7.332-.345M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerSmartHomeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
