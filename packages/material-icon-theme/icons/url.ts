import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUrlIcon],svg[material-icon-theme-url-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M10 14h12v4H10z"></svg:path><svg:path fill="#42a5f5" d="M12 22H9.562A5.57 5.57 0 0 1 4 16.438v-.876A5.57 5.57 0 0 1 9.562 10H12V6H9.562A9.56 9.56 0 0 0 0 15.562v.876A9.56 9.56 0 0 0 9.562 26H12ZM22.438 6H20v4h2.438A5.57 5.57 0 0 1 28 15.562v.876A5.57 5.57 0 0 1 22.438 22H20v4h2.438A9.56 9.56 0 0 0 32 16.438v-.876A9.56 9.56 0 0 0 22.438 6"></svg:path>`,
})
export class MaterialIconThemeUrlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
