import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsComputingIcon],svg[akar-icons-computing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="2"></svg:rect><svg:path d="M8 5V2m8 3V3l1-1m-1 20v-3m-7 3v-3M5 8H2m20 0h-3m3 8h-3M5 16H3l-1 1"></svg:path></svg:g>`,
})
export class AkarIconsComputingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
