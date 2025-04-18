import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHttpsIcon],svg[tdesign-https-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7.5a6.5 6.5 0 0 1 13 0V9h2v13h-17V9h2zm2 1.5h9V7.5a4.5 4.5 0 1 0-9 0zm-2 2v9h13v-9zm4.5 4.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignHttpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
