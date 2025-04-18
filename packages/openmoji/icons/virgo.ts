import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiVirgoIcon],svg[openmoji-virgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v48H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M12 12h48v48H12z"></svg:path><svg:path stroke-width="3" d="m35.23 44.91l.125-13.68M26.31 44.91V30.88c-.145-1.558-.626-3.32-2.212-5.754"></svg:path><svg:path stroke-width="3" d="M26.31 31.22s.766-6.485 4.523-6.437s4.405 4.103 4.523 6.437c.183-2.264.916-6.54 4.478-6.544s4.31 3.958 4.478 6.544V44.9c.365 2.829 2.394 5.11 3.83 5.112"></svg:path><svg:path stroke-width="3" d="M48.141 50.012c3.042.488 3.964-9.966 1.124-10.73c-3.348-.579-5.387 7.691-7.545 13.16"></svg:path></svg:g>`,
})
export class OpenmojiVirgoIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
