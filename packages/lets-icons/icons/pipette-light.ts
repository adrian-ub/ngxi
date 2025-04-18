import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPipetteLightIcon],svg[lets-icons-pipette-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16.5 12a.5.5 0 1 0 0 1zm-1.568 1.068l.354.353zm-2.797.066l-.354.354zM21 7.5a4.5 4.5 0 0 1-4.5 4.5v1A5.5 5.5 0 0 0 22 7.5zM16.5 3A4.5 4.5 0 0 1 21 7.5h1A5.5 5.5 0 0 0 16.5 2zM12 7.5A4.5 4.5 0 0 1 16.5 3V2A5.5 5.5 0 0 0 11 7.5zm-.78 1.988l.066-.067l-.707-.707l-.067.067zm1.268 3.293l-1.269-1.27l-.707.708l1.269 1.27zm2.09-.067l-.066.067l.707.707l.067-.067zm.708.707c.283-.283.718-.421 1.214-.421v-1c-.658 0-1.388.181-1.921.714zm-3.505.067c.95.95 2.489.95 3.438 0l-.707-.707a1.43 1.43 0 0 1-2.024 0zm-1.269-4.707a2.43 2.43 0 0 0 0 3.438l.707-.707a1.43 1.43 0 0 1 0-2.024zM11 7.5c0 .496-.138.931-.421 1.214l.707.707C11.819 8.89 12 8.158 12 7.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 15.5l4-4l2 2l-4 4l-2.199 1.32a.45.45 0 0 1-.55-.068l-.503-.504a.45.45 0 0 1-.067-.55zm7-8a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class LetsIconsPipetteLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
