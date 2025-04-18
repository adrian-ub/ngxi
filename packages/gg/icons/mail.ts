import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMailIcon],svg[gg-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.01 5.838a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v11.324a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11q0-.072.01-.14zM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 0 1-4.242 0zm1.572-1.256h10.856l-4.72 4.72a1 1 0 0 1-1.415 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
