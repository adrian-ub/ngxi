import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMicAltFillIcon],svg[lets-icons-mic-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22v-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.083 8H9a1 1 0 0 1 0 2H6v2h3a1 1 0 1 1 0 2H6.083a6.002 6.002 0 0 0 11.834 0H16a1 1 0 1 1 0-2h2v-2h-2a1 1 0 1 1 0-2h1.917A6.002 6.002 0 0 0 6.083 8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsMicAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
