import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerScubaMaskOffIcon],svg[tabler-scuba-mask-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 7h5a1 1 0 0 1 1 1v4.5q0 .231-.04.45m-2 2.007q-.226.042-.463.043h-.5a2 2 0 0 1-2-2a2 2 0 1 0-4 0a2 2 0 0 1-2 2h-.5a2.5 2.5 0 0 1-2.5-2.5V8a1 1 0 0 1 1-1h3M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 2.765-.744m2-2c.47-.81.739-1.752.739-2.756V4M3 3l18 18"></svg:path>`,
})
export class TablerScubaMaskOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
