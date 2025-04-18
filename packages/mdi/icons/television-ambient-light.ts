import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionAmbientLightIcon],svg[mdi-television-ambient-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11H0V9h3zm0 3H0v2h3zm2-8.88L2.88 3L1.46 4.41l2.13 2.13zM10 5V2H8v3zm14 4h-3v2h3zm-8-4V2h-2v3zm4.41 1.54l2.13-2.12L21.12 3L19 5.12zM24 14h-3v2h3zm-5-5v7c0 1.1-.9 2-2 2h-2v2H9v-2H7c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2m-2 0H7v7h10zm2 10.88L21.12 22l1.42-1.41l-2.13-2.12zM3.59 18.46l-2.12 2.13L2.88 22L5 19.88z"></svg:path>`,
})
export class MdiTelevisionAmbientLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
