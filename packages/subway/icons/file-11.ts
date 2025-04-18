import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile11Icon],svg[subway-file-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.7 85.3H20V512h384v-42.7H62.7zM361.3 0v128h128zM340 0H105.3v426.7h384V149.3H340zm64 298.7h-64V384h-85.3v-85.3h-64L297.3 192z"></svg:path>`,
})
export class SubwayFile11Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
