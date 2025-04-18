import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laDigitalTachographIcon],svg[la-digital-tachograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.018 7A2.017 2.017 0 0 0 2 9.018v13.964C2 24.097 2.903 25 4.018 25h22.964A2.017 2.017 0 0 0 29 22.982V9.018A2.017 2.017 0 0 0 26.982 7zM4 9h23v14H4zm2 2v2h10v-2zm0 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h10v-2zm12 0v2h7v-2z"></svg:path>`,
})
export class LaDigitalTachographIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
