import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile10Icon],svg[subway-file-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M338 0H103.3v426.7h384V149.3H338zm21.3 0v128h128zM60.7 85.3H18V512h384v-42.7H60.7z"></svg:path>`,
})
export class SubwayFile10Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
