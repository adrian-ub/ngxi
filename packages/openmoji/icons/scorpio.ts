import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiScorpioIcon],svg[openmoji-scorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v48H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M12 12h48v48H12z"></svg:path><svg:path stroke-width="3" d="m49.97 47.17l3.731 3.757l-3.731 3.757M35.23 44.91l.125-13.68M26.31 44.91V30.88c-.145-1.558-.626-3.32-2.212-5.754"></svg:path><svg:path stroke-width="3" d="M26.31 31.23s.766-6.485 4.523-6.437s4.405 4.103 4.523 6.437c.183-2.264.916-6.54 4.478-6.544s4.31 3.958 4.478 6.544v13.68s.13 6.155 5.921 6.004"></svg:path></svg:g>`,
})
export class OpenmojiScorpioIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
