import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMonkeybarIcon],svg[tabler-monkeybar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 21V6l5-3l5 3v15m-5 0v-7m-5 0h10"></svg:path><svg:path d="M6 10a2 2 0 1 1 4 0m3 3c6 0 3 8 8 8"></svg:path></svg:g>`,
})
export class TablerMonkeybarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
