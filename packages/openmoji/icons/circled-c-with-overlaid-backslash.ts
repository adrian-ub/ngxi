import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircledCWithOverlaidBackslashIcon],svg[openmoji-circled-c-with-overlaid-backslash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26.68" fill="#fff" fill-rule="evenodd"></svg:circle><svg:g fill="none" stroke="#000" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-miterlimit="10" stroke-width="8.693" d="M43.02 48.48a10.83 10.83 0 0 1-7.212 2.734c-5.999 0-10.87-4.865-10.87-10.87v-8.693v8.693v-8.693c0-6.003 4.869-10.87 10.87-10.87c2.769 0 5.295 1.035 7.212 2.734" clip-rule="evenodd"></svg:path><svg:circle cx="36" cy="36" r="26.68" stroke-linecap="round" stroke-width="4.74"></svg:circle><svg:path stroke-width="4.74" d="M54.49 54.46L18.03 18l.458-.458"></svg:path></svg:g>`,
})
export class OpenmojiCircledCWithOverlaidBackslashIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
