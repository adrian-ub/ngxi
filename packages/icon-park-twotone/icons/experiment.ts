import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneExperimentIcon],svg[icon-park-twotone-experiment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTExperiment0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" d="M12 4h24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10.777 30l7.242-14.961V4h12.01v11.039L37.245 30"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M7.794 43.673a3.273 3.273 0 0 1-1.52-4.372L10.777 30S18 35 24 30s13.246 0 13.246 0l4.49 9.305A3.273 3.273 0 0 1 38.787 44H9.22c-.494 0-.981-.112-1.426-.327Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTExperiment0)"></svg:path>`,
})
export class IconParkTwotoneExperimentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
