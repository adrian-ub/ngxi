import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPassword2Icon],svg[material-symbols-light-password-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.405 12.635q-1.001 0-1.703-.705T2 10.218t.7-1.699t1.703-.692q1 0 1.703.696t.702 1.689q0 1.01-.701 1.716q-.701.707-1.702.707M3 18.23V17h18v1.23zm9.001-5.616q-1.001 0-1.703-.7q-.702-.701-.702-1.702t.701-1.703t1.702-.702t1.703.7q.702.701.702 1.702t-.701 1.703t-1.702.702m7.596 0q-1 0-1.703-.7q-.702-.701-.702-1.702q0-1.002.701-1.704q.701-.701 1.702-.701t1.703.7T22 10.21t-.7 1.703t-1.703.702"></svg:path>`,
})
export class MaterialSymbolsLightPassword2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
