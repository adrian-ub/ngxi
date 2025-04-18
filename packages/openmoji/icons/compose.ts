import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiComposeIcon],svg[openmoji-compose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><svg:path fill="#FCEA2B" stroke="#FCEA2B" stroke-width="1.8" d="m35.25 12l11.125 11.25V62H13V12z"></svg:path><svg:path fill="#F1B31C" stroke="#F1B31C" stroke-width="1.8" d="M15.688 62h-3.063h33.75V36.625L20.938 62z"></svg:path><svg:path fill="#FFF" d="M34 49v5h5l24-24l-5-5z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M46.375 31v-7.75h-11.25V12h-22.5v50h33.75v-9.833M35.125 12l11.25 11.25M41 30H18m10-6H18m23 12H18m10 6H18m10 6H18m10 6H18"></svg:path><svg:path d="M34 49v5h5l24-24l-5-5z"></svg:path></svg:g>`,
})
export class OpenmojiComposeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
