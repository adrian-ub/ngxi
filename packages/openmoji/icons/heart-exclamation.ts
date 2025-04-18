import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHeartExclamationIcon],svg[openmoji-heart-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#FFA7C0"><svg:path d="M52 20.65a8.51 8.51 0 0 0-16-4.044a8.51 8.51 0 0 0-16 4.044a8.47 8.47 0 0 0 1.886 5.337l-.003.002L36 43.486l14.117-17.497l-.003-.002A8.47 8.47 0 0 0 52 20.65"></svg:path><svg:circle cx="36.022" cy="55.007" r="5"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36.022" cy="55.007" r="5"></svg:circle><svg:path stroke-linejoin="round" d="M52 20.65a8.51 8.51 0 0 0-16-4.044a8.51 8.51 0 0 0-16 4.044a8.47 8.47 0 0 0 1.886 5.337l-.003.002L36 43.486l14.117-17.497l-.003-.002A8.47 8.47 0 0 0 52 20.65z"></svg:path></svg:g>`,
})
export class OpenmojiHeartExclamationIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
