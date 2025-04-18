import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed075SharpIcon],svg[material-symbols-light-speed-0-75-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16.5v-1h1v1zm8 0v-1h4v-3h-4v-5h5v1h-4v3h4v5zm-4.73 0l2-8H7.307v-1h5v.916l-2 8.084z"></svg:path>`,
})
export class MaterialSymbolsLightSpeed075SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
