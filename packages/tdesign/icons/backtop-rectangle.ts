import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBacktopRectangleIcon],svg[tdesign-backtop-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm13.5 4h-11V6h11zm-5.5.808l4.596 4.596l-1.414 1.414L13 12.636V18.5h-2v-5.864l-2.182 2.182l-1.414-1.414z"></svg:path>`,
})
export class TdesignBacktopRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
