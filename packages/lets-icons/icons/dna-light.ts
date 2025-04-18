import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDnaLightIcon],svg[lets-icons-dna-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="m19.5 3.5l-.282 2.54A7.26 7.26 0 0 1 12 12.5v0c-3.7 0-6.81 2.782-7.218 6.46L4.5 21.5"></svg:path><svg:path stroke-linecap="round" d="m4.5 3.5l.282 2.54A7.25 7.25 0 0 0 7.8 11.163M19.5 21.5l-.282-2.54A7.26 7.26 0 0 0 12 12.5m7-6H5m14 12H5"></svg:path><svg:path d="M18 15.5H6"></svg:path><svg:path stroke-linecap="round" d="M17.5 9.5h-11"></svg:path></svg:g>`,
})
export class LetsIconsDnaLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
