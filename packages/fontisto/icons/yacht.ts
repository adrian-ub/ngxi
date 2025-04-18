import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoYachtIcon],svg[fontisto-yacht-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 19.216L5.414 24h15.882l2.274-3.195L.002 19.216zM13.985 0v19.073l7.309.503zm-.996 3.214L2.429 18.241l10.56.713z"></svg:path>`,
})
export class FontistoYachtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
