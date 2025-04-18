import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeMerlinIcon],svg[material-icon-theme-merlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M57.857 40.232h37.088l46.022 140.044l46.7-140.044h36.546l33.57 200.781h-36.547l-21.387-126.796l-42.367 126.796h-33.435L82.222 114.217L60.428 241.013H23.476z"></svg:path>`,
})
export class MaterialIconThemeMerlinIcon {
  readonly viewBox = input("0 0 281.25 281.25")
  readonly width = input("1em")
  readonly height = input("1em")
}
