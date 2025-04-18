import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTagMultipleVarIcon],svg[proicons-tag-multiple-var-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.14 10.015l-6.209-6.21a2 2 0 0 0-1.414-.585H6.115a2 2 0 0 0-2 2v5.402a2 2 0 0 0 .586 1.414l6.209 6.209a3 3 0 0 0 4.243 0l3.987-3.988a3 3 0 0 0 0-4.242"></svg:path><svg:circle cx="8.562" cy="7.667" r="1.138" fill="currentColor" transform="rotate(-45 8.562 7.667)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.701 14.456l5.795 5.794a5 5 0 0 0 7.07 0l3.696-3.694"></svg:path></svg:g>`,
})
export class ProiconsTagMultipleVarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
