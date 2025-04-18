import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeGamemakerIcon],svg[material-icon-theme-gamemaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="M8 1.422L14.578 8h-3.759v3.853c-.94.846-1.88 1.785-2.819 2.725L1.422 8zM5.275 8L8 10.725V8h2.725A37 37 0 0 0 8 5.275A37 37 0 0 0 5.275 8"></svg:path>`,
})
export class MaterialIconThemeGamemakerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
