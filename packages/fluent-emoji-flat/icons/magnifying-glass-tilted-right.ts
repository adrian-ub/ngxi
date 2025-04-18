import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatMagnifyingGlassTiltedRightIcon],svg[fluent-emoji-flat-magnifying-glass-tilted-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M29 13c0 5.523-4.477 10-10 10S9 18.523 9 13S13.477 3 19 3s10 4.477 10 10"></svg:path><svg:path fill="#fff" d="M24.348 7.732c.552.957.419 2.068-.299 2.482c-.717.414-1.747-.025-2.299-.982s-.418-2.068.299-2.482c.718-.414 1.747.025 2.3.982"></svg:path><svg:path fill="#533566" d="M30 13c0 6.075-4.925 11-11 11c-2.295 0-4.426-.703-6.19-1.905a3.75 3.75 0 0 1-1.005 3.483L8.623 28.76a3.75 3.75 0 0 1-5.303-5.303l3.182-3.182a3.75 3.75 0 0 1 3.454-1.012A10.95 10.95 0 0 1 8 13C8 6.925 12.925 2 19 2s11 4.925 11 11m-2 0a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatMagnifyingGlassTiltedRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
