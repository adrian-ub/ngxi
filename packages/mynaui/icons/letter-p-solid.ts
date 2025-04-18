import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterPSolidIcon],svg[mynaui-letter-p-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.625 6C8.728 6 8 6.728 8 7.625V17a1 1 0 1 0 2 0v-4h3.375a2.875 2.875 0 0 0 2.875-2.875v-1.25A2.875 2.875 0 0 0 13.375 6zM10 11V8h3.375c.483 0 .875.392.875.875v1.25a.875.875 0 0 1-.875.875z"></svg:path>`,
})
export class MynauiLetterPSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
