import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEpubIcon],svg[material-icon-theme-epub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="M8 12.401L3.601 8L8 3.601l1.468 1.466L6.534 8L8 9.467l4.4-4.4l-3.833-3.832a.8.8 0 0 0-1.133 0L1.235 7.434a.8.8 0 0 0 0 1.133l6.199 6.199a.8.8 0 0 0 1.133 0l6.199-6.199a.803.803 0 0 0 0-1.133l-.9-.899z"></svg:path>`,
})
export class MaterialIconThemeEpubIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
