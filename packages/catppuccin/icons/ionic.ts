import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinIonicIcon],svg[catppuccin-ionic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.6 3.4A6.5 6.5 0 1 0 14 5.5"></svg:path><svg:path d="M10.5 8A2.5 2.5 0 0 1 8 10.5A2.5 2.5 0 0 1 5.5 8A2.5 2.5 0 0 1 8 5.5A2.5 2.5 0 0 1 10.5 8M13 3.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path></svg:g>`,
})
export class CatppuccinIonicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
