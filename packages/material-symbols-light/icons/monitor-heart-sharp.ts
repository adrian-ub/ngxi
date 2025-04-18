import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMonitorHeartSharpIcon],svg[material-symbols-light-monitor-heart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.5V5h18v6.5h-4.683l-1.911-3.804h-.812L10 14.866L8.317 11.5zM3 19v-6.5h4.683l1.911 3.804h.812L14 9.134l1.683 3.366H21V19z"></svg:path>`,
})
export class MaterialSymbolsLightMonitorHeartSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
