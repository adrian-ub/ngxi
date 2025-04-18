import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBarrier11Icon],svg[maki-barrier-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.5 2h-8a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5H2v2.5a.5.5 0 0 0 1 0V9h5v.5a.5.5 0 0 0 1 0V7h.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM2 3h1.5l3 3h-2L2 3.5zm0 3V4.5L3.5 6zm1 2V7h5v1zm6-2H7.5l-3-3h2L9 5.5zm0-1.5L7.5 3H9z" fill="currentColor"></svg:path>`,
})
export class MakiBarrier11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
