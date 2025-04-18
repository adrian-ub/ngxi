import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHotWaterBottleIcon],svg[openmoji-hot-water-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="m47.176 59.056l-2.203.55a37 37 0 0 1-17.946 0l-2.203-.55a4.97 4.97 0 0 1-3.764-4.822V23.352a5.637 5.637 0 0 1 5.637-5.638h18.606a5.637 5.637 0 0 1 5.637 5.638v30.882a4.97 4.97 0 0 1-3.764 4.822"></svg:path><svg:path fill="#61b2e4" d="m46.111 53.994l-9.173-.514a15 15 0 0 0-1.644 0l-9.174.514a2.04 2.04 0 0 1-2.14-2.056v-28.63a2.484 2.484 0 0 1 2.465-2.5h19.341a2.484 2.484 0 0 1 2.466 2.5v28.63a2.04 2.04 0 0 1-2.14 2.056"></svg:path><svg:path fill="#92d3f5" d="M36.15 10.736a14.45 14.45 0 0 0-6.52 1.647l1.454 7.994a5.633 5.633 0 0 0 10.133 0l1.453-7.994a14.45 14.45 0 0 0-6.52-1.647"></svg:path><svg:circle cx="36.302" cy="56.56" r="1.102" fill="#fff"></svg:circle><svg:g fill="none" stroke="#000"><svg:path stroke-miterlimit="10" stroke-width="2" d="M40.718 21.797h4.487a2.335 2.335 0 0 1 2.32 2.351v26.924a1.926 1.926 0 0 1-2.012 1.935l-8.627-.486a13 13 0 0 0-1.542 0l-8.628.486a1.926 1.926 0 0 1-2.012-1.935V24.148a2.34 2.34 0 0 1 2.32-2.351h4.557"></svg:path><svg:circle cx="36.302" cy="56.56" r="1.102" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.001" d="M36.15 10.736a14.45 14.45 0 0 0-6.52 1.647l1.454 7.994a5.633 5.633 0 0 0 10.133 0l1.453-7.994a14.45 14.45 0 0 0-6.52-1.647"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.001" d="M41.699 17.714h3.608a5.64 5.64 0 0 1 5.633 5.633v30.889a4.97 4.97 0 0 1-3.764 4.822l-2.205.549a36.9 36.9 0 0 1-17.942 0l-2.205-.55a4.97 4.97 0 0 1-3.764-4.821V23.347a5.64 5.64 0 0 1 5.633-5.633h3.903"></svg:path></svg:g>`,
})
export class OpenmojiHotWaterBottleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
