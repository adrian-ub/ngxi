import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRotateCwIcon],svg[zmdi-rotate-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m312 126l139 138l-139 139l-138-139zm78 138l-78-78l-78 78l78 78zM56 131q56-56 136-56V6l90 90l-90 90v-69q-62 0-105.5 44T43 266.5T86.5 372T192 416q31 0 60-13l32 31q-43 24-92 24q-80 0-136-56T0 266.5T56 131"></svg:path>`,
})
export class ZmdiRotateCwIcon {
  readonly viewBox = input("0 0 456 464")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
