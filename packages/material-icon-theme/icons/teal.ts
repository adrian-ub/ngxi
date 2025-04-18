import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTealIcon],svg[material-icon-theme-teal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00acc1" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m8 14h-8V8h8Z"></svg:path>`,
})
export class MaterialIconThemeTealIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
