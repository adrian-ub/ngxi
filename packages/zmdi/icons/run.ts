import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRunIcon],svg[zmdi-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.5 85Q209 85 196 72.5t-13-30t13-30T226.5 0t30 12.5t12.5 30t-12.5 30t-30 12.5M149 381L0 352l9-43l104 21l34-173l-38 15v73H66V145l111-47q3 0 8.5-1t8.5-1q22 0 36 21l22 34q13 23 37.5 37t53.5 14v43q-71 0-117-53l-13 64l45 42v160h-43V330l-44-42z"></svg:path>`,
})
export class ZmdiRunIcon {
  readonly viewBox = input("0 0 344 464")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
