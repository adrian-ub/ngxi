import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHdvideoIcon],svg[whh-hdvideo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h768q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768M448 160q0-13-9.5-22.5T416 128h-64q-13 0-22.5 9.5T320 160v160H192V160q0-13-9.5-22.5T160 128H96q-13 0-22.5 9.5T64 160v448q0 13 9.5 22.5T96 640h64q13 0 22.5-9.5T192 608V448h128v160q0 13 9.5 22.5T352 640h64q13 0 22.5-9.5T448 608zm512 160q0-80-56.5-136T768 128H608q-13 0-22.5 9.5T576 160v448q0 13 9.5 22.5T608 640h160q79 0 135.5-56T960 448zM768 512h-64V256h64q26 0 45 19t19 45v128q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhHdvideoIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
