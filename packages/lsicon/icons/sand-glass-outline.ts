import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSandGlassOutlineIcon],svg[lsicon-sand-glass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 1.5h10m-10 13h10M4.5 2v4l2 2m5 6v-4l-2-2m2-6v4l-3 3m-4 5v-4l3-3M6 11.5h4m-3-6h2"></svg:path>`,
})
export class LsiconSandGlassOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
