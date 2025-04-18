import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLifehackerIcon],svg[whh-lifehacker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M672 1024h-64q-13 0-22.5-9.5T576 992V480q0-45-36.5-70.5T448 384q-41 0-64 14v594q0 13-9.5 22.5T352 1024h-64q-13 0-22.5-9.5T256 992V32q0-13 9.5-22.5T288 0h64q13 0 22.5 9.5T384 32v237q24-13 64-13q107 0 181.5 64.5T704 480v512q0 13-9.5 22.5T672 1024m-512 0H32q-13 0-22.5-9.5T0 992V32Q0 19 9.5 9.5T32 0h128q13 0 22.5 9.5T192 32v960q0 13-9.5 22.5T160 1024"></svg:path>`,
})
export class WhhLifehackerIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
