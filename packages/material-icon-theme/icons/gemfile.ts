import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeGemfileIcon],svg[material-icon-theme-gemfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M21.184 10.016V10H10.881l.016.033l-.016-.017L8 14l8.032 10L24 14z"></svg:path><svg:path fill="#e53935" d="m16 3.455l11 6.286v12.518l-11 6.286l-11-6.286V9.741zM16 0L2 8v16l14 8l14-8V8z"></svg:path>`,
})
export class MaterialIconThemeGemfileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
