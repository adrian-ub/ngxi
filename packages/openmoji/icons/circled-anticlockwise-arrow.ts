import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircledAnticlockwiseArrowIcon],svg[openmoji-circled-anticlockwise-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26.68" fill="#fff" fill-rule="evenodd"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="36" cy="36" r="26.68" stroke-width="4.74"></svg:circle><svg:path stroke-miterlimit="7" stroke-width="7" d="m20.66 30.58l5.421 5.421l5.424-5.424"></svg:path><svg:path stroke-miterlimit="7" stroke-width="7" d="M25.13 31.65c0-6.003 4.869-10.87 10.87-10.87c5.999 0 10.87 4.865 10.87 10.87v8.693v-8.693v8.693c0 6.003-4.869 10.87-10.87 10.87a10.88 10.88 0 0 1-9.739-6.034" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class OpenmojiCircledAnticlockwiseArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
