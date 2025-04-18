import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelTwitterIcon],svg[raphael-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.295 22.567h-7.213c-2.125 0-4.103-2.215-4.103-4.736v-1.828h11.23a3.287 3.287 0 0 0 3.292-3.28a3.287 3.287 0 0 0-3.29-3.283H11.978V6.197c0-1.835-1.376-3.323-3.193-3.323c-1.816 0-3.29 1.488-3.29 3.323V17.83c0 6.23 4.685 11.275 10.476 11.275h7.21c1.82 0 3.32-1.463 3.32-3.298s-1.39-3.24-3.208-3.24z"></svg:path>`,
})
export class RaphaelTwitterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
