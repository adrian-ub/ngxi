import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biVignetteIcon],svg[bi-vignette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></svg:path><svg:path d="M8.5 4.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m0 7a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.683-6.281a.5.5 0 1 1-.866-.5a.5.5 0 0 1 .866.5m-3.5 6.062a.5.5 0 1 1-.866-.5a.5.5 0 0 1 .866.5m4.598-4.598a.5.5 0 1 1-.5-.866a.5.5 0 0 1 .5.866m-6.062 3.5a.5.5 0 1 1-.5-.866a.5.5 0 0 1 .5.866M11.5 8.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m6.281 1.683a.5.5 0 1 1 .5-.866a.5.5 0 0 1-.5.866m-6.062-3.5a.5.5 0 1 1 .5-.866a.5.5 0 0 1-.5.866m4.598 4.598a.5.5 0 1 1 .866-.5a.5.5 0 0 1-.866.5m-3.5-6.062a.5.5 0 1 1 .866-.5a.5.5 0 0 1-.866.5"></svg:path></svg:g>`,
})
export class BiVignetteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
