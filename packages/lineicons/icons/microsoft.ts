import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMicrosoftIcon],svg[lineicons-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.594h8.594V3H3zm18 0V3h-8.594v8.594zM3 21h8.594v-8.593H3zm9.406 0H21v-8.593h-8.594z"></svg:path>`,
})
export class LineiconsMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
