import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosStatuspageIcon],svg[logos-statuspage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosStatuspage0" x1="50%" x2="50%" y1="82.799%" y2="-5.781%"><svg:stop offset="0%" stop-color="#2684FF"></svg:stop><svg:stop offset="82%" stop-color="#0052CC"></svg:stop></svg:lineargradient></svg:defs><svg:circle cx="128" cy="128.433" r="59.865" fill="url(#logosStatuspage0)"></svg:circle><svg:path fill="#2684FF" d="M1.616 59.255L33.8 97.374a6.86 6.86 0 0 0 9.744.72c52.118-46.73 116.657-46.73 168.912 0a6.86 6.86 0 0 0 9.744-.72l32.184-38.12a6.86 6.86 0 0 0-.79-9.64c-75.483-66.152-175.568-66.152-251.189 0a6.86 6.86 0 0 0-.789 9.64"></svg:path>`,
})
export class LogosStatuspageIcon {
  readonly viewBox = input("0 0 256 189")
  readonly width = input("1.36em")
  readonly height = input("1em")
}
