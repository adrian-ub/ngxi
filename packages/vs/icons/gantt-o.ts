import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsGanttOIcon],svg[vs-gantt-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 106v250q0 18-9 30t-23 12H32q-14 0-23-12t-9-30V106q0-18 9-30t23-12h1344q14 0 23 12t9 30m512 400v250q0 18-9 30t-23 12H544q-14 0-23-12t-9-30V506q0-16 9-28t23-14h1344q14 2 23 14t9 28m-768 402v250q0 17-9.5 29.5T1120 1200H288q-12 0-22-13t-10-29V908q0-18 10-30t22-12h832q14 0 23 12t9 30m512 400v250q0 17-9.5 29.5T1632 1600H800q-12 0-22-13t-10-29v-250q0-16 10-29t22-13h832q13 0 22.5 12.5t9.5 29.5"></svg:path>`,
})
export class VsGanttOIcon {
  readonly viewBox = input("0 0 1920 1600")
  readonly width = input("1.2em")
  readonly height = input("1em")
}
