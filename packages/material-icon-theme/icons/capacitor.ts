import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCapacitorIcon],svg[material-icon-theme-capacitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4fc3f7" d="m19.081 2.35l-4.795 4.795L9.62 2.482L7.05 5.05l4.664 4.665l2.57 2.57l4.705 4.705l2.57-2.57l-4.705-4.705l4.795-4.797zM5.052 7.05l-2.57 2.57l4.665 4.664L2.35 19.08l2.57 2.57l4.796-4.796l4.704 4.705l2.57-2.57l-7.274-7.274z" paint-order="fill markers stroke"></svg:path>`,
})
export class MaterialIconThemeCapacitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
