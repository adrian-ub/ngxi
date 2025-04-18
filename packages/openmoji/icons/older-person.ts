import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOlderPersonIcon],svg[openmoji-older-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92D3F5" d="M55 60.998V57c0-4.994-5.006-9-10-9q-9 7.5-18 0c-4.992 0-10 4.006-10 9v3.998z"></svg:path><svg:path fill="#D0CFCE" d="M25 39c-2 0-4-10-4-13c0-4 5-14 15-14s15 8 15 14c0 5-3 14-5 14"></svg:path><svg:path fill="#FCEA2B" d="M25 31.5C25 39.786 29 46 35.937 46C43 46 47 39.786 47 31.5c0-6.214-3-11.393-4-12.429C41 17 40 17 40 17c-2 1.036-9 0-11 2.071c-1 1.036-4 6.215-4 12.429"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27.096 41c-4-2-5.448-8.03-6-13c-1-9 6-16 15-16c10 0 16 7 15 16.154c-.743 6.806-3 11.846-6 12.846"></svg:path><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M25.096 31.5c0 8.286 4 14.5 10.936 14.5c7.064 0 11.064-6.214 11.064-14.5c0-6.214-1.216-8.102-2-9.321c-2-3.108-4-5.179-4-5.179c-2 1.036-10 0-12 2.071c-1 1.036-4 6.215-4 12.429z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 60v-3c0-4.994 5.008-9 10-9q9 7.5 18 0c4.994 0 10 4.006 10 9v3M38.127 38.438q-1.872 1.125-4 0m-3-2c0 1-1 2-1 2m11-2c0 1 1 2 1 2"></svg:path><svg:path d="M42 29.438a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class OpenmojiOlderPersonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
