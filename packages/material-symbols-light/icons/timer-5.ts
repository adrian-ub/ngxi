import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer5Icon],svg[material-symbols-light-timer-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.692 16.635h3.616q.42 0 .71-.3t.29-.72V13.5q0-.402-.3-.701q-.298-.299-.7-.299h-2.616v-2.134h3.616v-1H9.692V13.5h3.616v2.135H9.692zM9.385 2.5v-1h5.23v1zM12 21q-1.658 0-3.113-.626t-2.545-1.716t-1.716-2.546T4 13t.626-3.113t1.716-2.545t2.546-1.716T12 5q1.454 0 2.812.52t2.492 1.469l1.092-1.093l.708.708l-1.092 1.092q.95 1.135 1.469 2.493T20 13q0 1.658-.626 3.113t-1.716 2.545t-2.546 1.716T12 21"></svg:path>`,
})
export class MaterialSymbolsLightTimer5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
