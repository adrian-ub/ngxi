import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPanoramaVerticalIcon],svg[zmdi-panorama-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m340 411l2 6q0 12-14 12H13q-13 0-13-12q0-3 1-6q35-95 35-195T1 21q-1-3-1-6Q0 3 13 3h315q13 0 13 12q0 3-1 6q-35 95-35 195q0 101 35 195M54 387h233q-25-84-25-171t25-171H54q25 84 25 171T54 387"></svg:path>`,
})
export class ZmdiPanoramaVerticalIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
