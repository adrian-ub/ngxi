import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCrosshairSimpleFillIcon],svg[si-crosshair-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12M13 2v4a1 1 0 1 1-2 0V2zM2 11h4a1 1 0 1 1 0 2H2zm16 0a1 1 0 1 0 0 2h4v-2zm-5 7a1 1 0 1 0-2 0v4h2z" clip-rule="evenodd"></svg:path>`,
})
export class SiCrosshairSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
