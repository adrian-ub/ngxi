import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMinimizeIcon],svg[oui-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.146 14.146l4-4a.5.5 0 0 1 .765.638l-.057.07l-4 4a.5.5 0 0 1-.765-.638zl4-4zM6.5 8A1.5 1.5 0 0 1 8 9.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1 0-1zm2-5a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 1 1 0 1h-3A1.5 1.5 0 0 1 8 6.5v-3a.5.5 0 0 1 .5-.5m1.651 2.146l4-4a.5.5 0 0 1 .765.638l-.057.07l-4 4a.5.5 0 0 1-.765-.638zl4-4z"></svg:path>`,
})
export class OuiMinimizeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
