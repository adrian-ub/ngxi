import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDrizzleIcon],svg[material-icon-theme-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="m5.22 23.118l3.647-6.593a1.712 1.712 0 1 0-2.996-1.657L2.224 21.46a1.712 1.712 0 0 0 2.996 1.658m12.02 0l3.648-6.593a1.712 1.712 0 1 0-2.996-1.657l-3.648 6.592a1.712 1.712 0 0 0 2.996 1.658m-3.378-5.96l3.88-6.588a1.706 1.706 0 0 0-2.94-1.73l-3.88 6.588a1.706 1.706 0 0 0 2.94 1.73m12.028 0l3.88-6.588a1.706 1.706 0 0 0-2.94-1.73l-3.88 6.588a1.706 1.706 0 0 0 2.94 1.73"></svg:path>`,
})
export class MaterialIconThemeDrizzleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
