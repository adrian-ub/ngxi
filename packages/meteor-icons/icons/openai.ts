import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsOpenaiIcon],svg[meteor-icons-openai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.1 13.3L8 16.8l-4.2-2.6A4 4 0 0 1 6 6.7m6 7.8L6 11V6a4 4 0 0 1 7.6-2m-3.7 9.3V6.2l4.4-2.6a4 4 0 0 1 5.3 5.8m-9.7 1.3L16 7.2l4.2 2.6a4 4 0 0 1-2.2 7.5m-6-7.8l6 3.5v5a4 4 0 0 1-7.6 2m3.7-9.3v7.1l-4.4 2.6a4 4 0 0 1-5.3-5.8"></svg:path>`,
})
export class MeteorIconsOpenaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
