import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPersonMediumSkinToneBlondHairIcon],svg[openmoji-person-medium-skin-tone-blond-hair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92D3F5" d="M17 61v-4c0-5 5-9 10-9q9 7.5 18 0c5 0 10 4 10 9v4"></svg:path><svg:path fill="#FCEA2B" d="M26 39c-4 0-4-6-4-13s4-14 14-14s14 7 14 14s0 13-4 13"></svg:path><svg:path fill="#c19a65" d="M24.9 31c0 9 4.9 14 11 14c6 0 11.1-5 11.1-14c0-3-1-5-1-5c-3-3-7-8-7-8c-4 3-7 6-13 7c0 0-1.1 1-1.1 6"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26 39c-4 0-4-6-4-13s4-14 14-14s14 7 14 14s0 13-4 13M17 60v-3c0-5 5-9 10-9q9 7.5 18 0c5 0 10 4 10 9v3"></svg:path><svg:path d="M41.9 30c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-8 0c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2"></svg:path><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M24.9 31c0 9 4.9 14 11 14c6 0 11.1-5 11.1-14c0-3-1-5-1-5c-3-3-7-8-7-8c-4 3-7 6-13 7c0 0-1.1 1-1.1 6z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M33 38c1.9.9 4 1 6 0"></svg:path>`,
})
export class OpenmojiPersonMediumSkinToneBlondHairIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
