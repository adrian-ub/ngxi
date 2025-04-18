import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVolumeUpIcon],svg[material-symbols-light-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.077 19.494v-1.05q2.077-.727 3.346-2.5t1.27-3.969t-1.27-3.97t-3.346-2.5v-1.05q2.485.797 4.05 2.86t1.565 4.66t-1.565 4.66t-4.05 2.86M4.307 14v-4h3.424l3.577-3.577v11.154L7.73 14zm9.77 1.308V8.642q.848.55 1.29 1.449q.44.898.44 1.909q0 1.006-.45 1.882t-1.28 1.426"></svg:path>`,
})
export class MaterialSymbolsLightVolumeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
