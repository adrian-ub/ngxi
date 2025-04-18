import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCubeIcon],svg[uim-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.3L3.5 7.05L12 1.8l8.5 5.25z"></svg:path><svg:path fill="currentColor" d="M12 22.2v-9.9l8.5-5.25v9.9z" opacity=".25"></svg:path><svg:path fill="currentColor" d="m12 22.2l-8.5-5.25v-9.9L12 12.3z" opacity=".5"></svg:path>`,
})
export class UimCubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
