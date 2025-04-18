import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiEntrance15Icon],svg[maki-entrance-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 6.5v-1a1 1 0 1 0-2 0v3l2-2zm-2.35 4.06L5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0l-.35 7.56z" fill="currentColor"></svg:path><svg:path d="M14 6a1 1 0 0 1-1 1h-1.58a1 1 0 0 0-.71.29l-5.42 5.42a1 1 0 0 1-.7.29H2a1 1 0 1 1 0-2h1.59a1 1 0 0 0 .7-.29l5.42-5.42a1 1 0 0 1 .71-.29H13a1 1 0 0 1 1 1z" fill="currentColor"></svg:path>`,
})
export class MakiEntrance15Icon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
