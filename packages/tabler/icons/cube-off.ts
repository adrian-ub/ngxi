import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCubeOffIcon],svg[tabler-cube-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.83 16.809c.11-.248.17-.52.17-.801V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.008a2.02 2.02 0 0 0-2 0L7.988 3.99M5.441 5.448L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.02 2.02 0 0 0 2 0l5.544-3.174M12 22V12m2.532-1.462L20.73 6.96m-17.46 0L12 12M3 3l18 18"></svg:path>`,
})
export class TablerCubeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
