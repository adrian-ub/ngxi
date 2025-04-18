import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFootMediumLightSkinToneIcon],svg[openmoji-foot-medium-light-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#debb90" d="M38 13s2 18 2 23c0 4.123-2.172 7.586-5 9c-4 2-14 7-19 7h-3.4a4.9 4.9 0 0 0-.6 2.5a3.5 3.5 0 0 0 3.5 3.5H49a5 5 0 0 0 5-5c0-6-3-11-3-17s3-23 3-23v-1H38Z"></svg:path><svg:path fill="#c19a65" d="M45.5 58H49a5 5 0 0 0 5-5c0-6-3-11-3-17s3-23 3-23v-1h-4s-3 17-3 23s3 11 3 17a5 5 0 0 1-5 5Z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M38 13s2 18 2 23c0 4.123-2.172 7.586-5 9c-4 2-14 7-19 7h-3.4a4.9 4.9 0 0 0-.6 2.5a3.5 3.5 0 0 0 3.5 3.5H49a5 5 0 0 0 5-5c0-6-3-11-3-17s3-23 3-23"></svg:path><svg:path stroke-miterlimit="10" d="M48 47a4 4 0 0 1-4 4"></svg:path></svg:g>`,
})
export class OpenmojiFootMediumLightSkinToneIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
