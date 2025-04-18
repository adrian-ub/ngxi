import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeepOffOutlineIcon],svg[material-symbols-light-keep-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4v1h-1v7.175l-1-1V5h-4v2.175l-1.04-1.04l-.19-1.325H8V4zm-4 16.5l-.5-.5v-5H7.423v-1L9 12.423v-1.996l-6.139-6.15l.708-.708l16.093 16.093l-.72.707L13.573 15H12.5v5zM8.85 14h3.762l-2.6-2.561L10 12.85zm1.162-2.561"></svg:path>`,
})
export class MaterialSymbolsLightKeepOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
