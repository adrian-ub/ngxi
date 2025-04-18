import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderZeaburOpenIcon],svg[material-icon-theme-folder-zeabur-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#7E57C2" d="M29 12H9.4c-.9 0-1.6.6-1.9 1.4L4 24V10h24c0-1.1-.9-2-2-2H15.1c-.5 0-.9-.2-1.3-.5l-1.3-1.1c-.3-.2-.8-.4-1.2-.4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h22l4.8-11.2c.4-1 0-2.2-1-2.6c-.3-.1-.6-.2-.8-.2"></svg:path><svg:g fill="#D1C4E9" clip-path="url(#materialIconThemeFolderZeaburOpen0)"><svg:path d="M20 24h12v6H12v-6h6l8-4H12v-6h20v6z"></svg:path><svg:path d="M26 14H12v6h14zm6 10H20v6h12z"></svg:path></svg:g><svg:defs><svg:clippath id="materialIconThemeFolderZeaburOpen0"><svg:path d="M12 14h20v16H12z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MaterialIconThemeFolderZeaburOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
