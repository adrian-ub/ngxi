import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemePaletteIcon],svg[material-icon-theme-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4fc3f7" d="M12.278 8a1.167 1.167 0 0 1-1.167-1.167a1.167 1.167 0 0 1 1.167-1.166a1.167 1.167 0 0 1 1.166 1.166A1.167 1.167 0 0 1 12.278 8M9.944 4.889a1.167 1.167 0 0 1-1.166-1.167a1.167 1.167 0 0 1 1.166-1.166a1.167 1.167 0 0 1 1.167 1.166A1.167 1.167 0 0 1 9.944 4.89m-3.888 0a1.167 1.167 0 0 1-1.167-1.167a1.167 1.167 0 0 1 1.167-1.166a1.167 1.167 0 0 1 1.166 1.166A1.167 1.167 0 0 1 6.056 4.89M3.722 8a1.167 1.167 0 0 1-1.166-1.167a1.167 1.167 0 0 1 1.166-1.166A1.167 1.167 0 0 1 4.89 6.833A1.167 1.167 0 0 1 3.722 8M8 1a7 7 0 0 0-7 7a7 7 0 0 0 7 7a1.167 1.167 0 0 0 1.167-1.167c0-.303-.117-.575-.304-.777a1.2 1.2 0 0 1-.295-.778a1.167 1.167 0 0 1 1.166-1.167h1.377A3.89 3.89 0 0 0 15 7.222C15 3.784 11.866 1 8 1"></svg:path>`,
})
export class MaterialIconThemePaletteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
