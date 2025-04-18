import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsAirpodsIcon],svg[akar-icons-airpods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M14 7c0 2.21 1.644 4 4 4s4-1.79 4-4s-1.644-4-4-4s-4 1.79-4 4Zm-4 0c0 2.21-1.644 4-4 4S2 9.21 2 7s1.644-4 4-4s4 1.79 4 4Z"></svg:path><svg:path stroke-linecap="round" d="M14 7v12a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-8"></svg:path><svg:path d="M14 17h4M6 17h4"></svg:path><svg:path stroke-linecap="round" d="M10 7v12a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-8"></svg:path><svg:path d="M20 4a5.41 5.41 0 0 0 0 6M4 4a5.41 5.41 0 0 1 0 6"></svg:path></svg:g>`,
})
export class AkarIconsAirpodsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
