import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile12Icon],svg[subway-file-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M362.3 0v128h128zM63.7 85.3H21V512h384v-42.7H63.7zM341 0H106.3v426.7h384V149.3H341zm64 277.3L298.3 384L191.7 277.3h64V192H341v85.3z"></svg:path>`,
})
export class SubwayFile12Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
