import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsRecieptIcon],svg[akar-icons-reciept-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M19 21H7a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13c0 1.657.343 3 2 3"></svg:path><svg:path stroke-linejoin="round" d="M21 10a2 2 0 0 0-2-2h-2v10.5c0 1.38.62 2.5 2 2.5s2-1.12 2-2.5z"></svg:path><svg:path d="M13 11H7m6-4H7m3 8H7"></svg:path></svg:g>`,
})
export class AkarIconsRecieptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
