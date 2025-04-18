import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShotIcon],svg[openmoji-shot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M26.357 42.272l2.552 2.552l-2.144 2.144l-2.552-2.552z"></svg:path><svg:path fill="#d0cfce" d="M46.98 20.536l3.283 3.284l-3.124 3.124l-3.284-3.283z"></svg:path><svg:path fill="#9b9b9a" d="M47.953 16.064l6.782 6.782l-2.59 2.59l-6.782-6.782z"></svg:path><svg:path fill="#d22f27" d="M30.833 33.185l6.782 6.781l-6.782 6.782l-6.781-6.782z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M42.062 21.955l6.782 6.782l-18.011 18.011l-6.782-6.782z"></svg:path><svg:path d="M26.357 42.272l2.552 2.552l-2.144 2.144l-2.552-2.552z"></svg:path><svg:path d="M46.98 20.536l3.283 3.284l-3.124 3.124l-3.284-3.283z"></svg:path><svg:path d="M47.953 16.064l6.782 6.782l-2.59 2.59l-6.782-6.782z"></svg:path><svg:path d="M25.081 46.099l-9.984 9.985"></svg:path><svg:path d="M38.526 34.856l2.082 2.082"></svg:path><svg:path d="M40.668 30.458l3.21 3.21"></svg:path><svg:path d="M30.833 33.185l6.782 6.781l-6.782 6.782l-6.781-6.782z"></svg:path></svg:g>`,
})
export class OpenmojiShotIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
