import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LayersFillIcon],svg[f7-layers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m42.4 30l6.886 4.304a2 2 0 0 1 0 3.392L34.36 47.025a12 12 0 0 1-12.72 0L6.714 37.696a2 2 0 0 1 0-3.392L13.6 30l8.04 5.025a12 12 0 0 0 12.72 0zM34.36 8.975l14.926 9.329a2 2 0 0 1 0 3.392L34.36 31.025a12 12 0 0 1-12.72 0L6.714 21.696a2 2 0 0 1 0-3.392L21.64 8.975a12 12 0 0 1 12.72 0"></svg:path>`,
})
export class F7LayersFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
