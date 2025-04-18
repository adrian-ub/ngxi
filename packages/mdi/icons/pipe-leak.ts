import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPipeLeakIcon],svg[mdi-pipe-leak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v8h2v-2h6l2-2l-2-2H4V5zm18 0v2h-8l2 2l-2 2h8v2h2V5zm-8 8s-2 2.17-2 3.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.33-2-3.5-2-3.5"></svg:path>`,
})
export class MdiPipeLeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
