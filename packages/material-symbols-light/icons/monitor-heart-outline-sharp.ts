import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMonitorHeartOutlineSharpIcon],svg[material-symbols-light-monitor-heart-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9.5V5h18v4.5h-1V6H4v3.5zM3 19v-4.5h1V18h16v-3.5h1V19zm4.683-6.5l1.911 3.804h.812L14 9.134l1.683 3.366H21v-1h-4.683l-1.911-3.804h-.812L10 14.866L8.317 11.5H3v1zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightMonitorHeartOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
