import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeMinecraftIcon],svg[material-icon-theme-minecraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M4 4v24h24V4Zm20 10h-6v2h4v8h-4v-4h-4v4h-4v-8h4v-2H8V8h6v6h4V8h6Z"></svg:path>`,
})
export class MaterialIconThemeMinecraftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
