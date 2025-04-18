import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiKeycap1Icon],svg[twemoji-keycap-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M16.462 11.175h-1.829c-1.488 0-2.108-1.085-2.108-2.139c0-1.085.775-2.14 2.108-2.14h4.402c1.334 0 2.078.961 2.078 2.201V26.74c0 1.551-.992 2.418-2.326 2.418c-1.333 0-2.325-.867-2.325-2.418z"></svg:path>`,
})
export class TwemojiKeycap1Icon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
