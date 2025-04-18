import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTobiIcon],svg[material-icon-theme-tobi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c2185b" d="M2 2v28h28V2Zm16 16h-4v10h-2V18H8v-2h10Zm10 10h-8V16h2v10h6Z"></svg:path>`,
})
export class MaterialIconThemeTobiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
