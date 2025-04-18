import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCemeteryIcon],svg[maki-cemetery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.46 12h-.68L12 3.55a.52.52 0 0 0-.56-.55h-1.18c0-.92-1.23-2-2.75-2S4.77 2.08 4.77 3H3.54a.52.52 0 0 0-.54.55L4.2 12h-.65a.53.53 0 0 0-.55.5V14h9v-1.51a.52.52 0 0 0-.54-.49M4.5 5h6v1h-6z"></svg:path>`,
})
export class MakiCemeteryIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
