import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPiscesIcon],svg[openmoji-pisces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v47.83H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round"><svg:path stroke-linejoin="round" stroke-width="2" d="M12 12h48v48H12z"></svg:path><svg:path stroke-miterlimit="10" stroke-width="3" d="M23.39 50.52s7.057-4.043 6.983-14.52c.073-10.48-6.983-14.52-6.983-14.52m25.22 0S41.553 25.523 41.626 36c-.072 10.48 6.984 14.52 6.984 14.52"></svg:path><svg:path stroke-linejoin="round" stroke-width="3" d="M48.18 36.52H23.82"></svg:path></svg:g>`,
})
export class OpenmojiPiscesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
