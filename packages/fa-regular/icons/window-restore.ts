import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRegularWindowRestoreIcon],svg[fa-regular-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48m-96 464H48V256h320zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320z"></svg:path>`,
})
export class FaRegularWindowRestoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
