import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHeartDecorationIcon],svg[openmoji-heart-decoration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#B399C8" d="M11 11h50v50H11z"></svg:path><svg:path fill="#FFF" d="M52 30.64a8.51 8.51 0 0 0-16-4.045a8.51 8.51 0 0 0-16 4.044a8.47 8.47 0 0 0 1.886 5.337l-.003.003L36 53.475l14.117-17.496l-.003-.003A8.47 8.47 0 0 0 52 30.64"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path stroke-linecap="round" d="M11 11h50v50H11z"></svg:path><svg:path d="M52 30.64a8.51 8.51 0 0 0-16-4.045a8.51 8.51 0 0 0-16 4.044a8.47 8.47 0 0 0 1.886 5.337l-.003.003L36 53.475l14.117-17.496l-.003-.003A8.47 8.47 0 0 0 52 30.64z"></svg:path></svg:g>`,
})
export class OpenmojiHeartDecorationIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
