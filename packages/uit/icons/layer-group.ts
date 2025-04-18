import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitLayerGroupIcon],svg[uit-layer-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.25 8.452l9.5 5.48a.5.5 0 0 0 .5 0l9.5-5.48a.5.5 0 0 0 0-.866l-9.5-5.476a.51.51 0 0 0-.5 0l-9.5 5.476a.5.5 0 0 0 0 .866M12 3.122l8.499 4.898L12 12.923L3.501 8.02zm9.248 12.404L12 20.921l-9.248-5.395a.5.5 0 1 0-.504.864l9.5 5.542a.5.5 0 0 0 .504 0l9.5-5.542a.5.5 0 1 0-.504-.864m0-4L12 16.921l-9.248-5.395a.5.5 0 1 0-.504.864l9.5 5.542a.5.5 0 0 0 .504 0l9.5-5.542a.5.5 0 1 0-.504-.864"></svg:path>`,
})
export class UitLayerGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
