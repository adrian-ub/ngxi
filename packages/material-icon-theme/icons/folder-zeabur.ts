import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderZeaburIcon],svg[material-icon-theme-folder-zeabur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#7E57C2" d="m13.8 7.5l-1.3-1.1c-.3-.2-.8-.4-1.2-.4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H15.1c-.5 0-.9-.1-1.3-.5"></svg:path><svg:g fill="#D1C4E9" clip-path="url(#materialIconThemeFolderZeabur0)"><svg:path d="M20 24h12v6H12v-6h6l8-4H12v-6h20v6z"></svg:path><svg:path d="M26 14H12v6h14zm6 10H20v6h12z"></svg:path></svg:g><svg:defs><svg:clippath id="materialIconThemeFolderZeabur0"><svg:path d="M12 14h20v16H12z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MaterialIconThemeFolderZeaburIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
