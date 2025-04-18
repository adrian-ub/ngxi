import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBombIcon],svg[openmoji-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="m39.11 21.889l7.778-7.779l11 11l-7.778 7.778z"></svg:path><svg:path fill="#3F3F3F" d="m46.034 22.212l4.478-4.478l7.377 7.377l-5.367 5.367z"></svg:path><svg:circle cx="31.769" cy="40.404" r="23" fill="#9B9B9A"></svg:circle><svg:path fill="#3F3F3F" d="M19.633 55.737c12.703 0 23-10.297 23-23a22.9 22.9 0 0 0-5.21-14.576C47.286 20.754 54.56 29.73 54.56 40.404c0 12.702-10.297 23-23 23c-7.17 0-13.572-3.282-17.79-8.424c1.873.492 3.837.757 5.864.757"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m41.46 19.539l5.429-5.428l11 10.999l-5.367 5.367"></svg:path><svg:circle cx="31.769" cy="40.404" r="23"></svg:circle><svg:path d="m55.757 16.243l8.486-8.486"></svg:path></svg:g>`,
})
export class OpenmojiBombIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
