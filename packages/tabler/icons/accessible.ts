import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAccessibleIcon],svg[tabler-accessible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="m10 16.5l2-3l2 3m-2-3v-2l3-1m-6 0l3 1"></svg:path><svg:circle cx="12" cy="7.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class TablerAccessibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
