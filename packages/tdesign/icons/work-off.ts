import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWorkOffIcon],svg[tdesign-work-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 .586L23.414 22L22 23.414L20.086 21.5H2v-15h3.086L.586 2zM7.086 8.5H4v11h14.086zm.42-6H16.5v4.002L22 6.5l.003 11.418L20 15.915V8.501h-7.413l-2.003-2.003l3.916.004V4.5h-5v1.622L7.497 4.078z"></svg:path>`,
})
export class TdesignWorkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
