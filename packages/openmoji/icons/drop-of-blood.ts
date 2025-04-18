import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDropOfBloodIcon],svg[openmoji-drop-of-blood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="M56 46.707c0 11.774-8.954 21.296-20 21.296s-20-9.545-20-21.32c0 0-.22-14.309 16.656-40.188c0 0 3.167-5.37 6.354-.352C55.885 32.022 56 46.707 56 46.707"></svg:path><svg:path fill="#d22f27" d="M36 4c12.875 10.375 19.875 40.874 19.875 40.874c0 15.001-8.83 23.127-19.875 23.127c0 0 22-18.127 0-64.002"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56 46.707c0 11.774-8.954 21.296-20 21.296s-20-9.545-20-21.32c0 0-.22-14.309 16.656-40.188c0 0 3.167-5.37 6.354-.352C55.885 32.022 56 46.707 56 46.707"></svg:path>`,
})
export class OpenmojiDropOfBloodIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
