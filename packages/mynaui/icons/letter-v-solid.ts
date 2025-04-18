import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterVSolidIcon],svg[mynaui-letter-v-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.936 6.649a1 1 0 0 0-1.872.702l3.75 10a1 1 0 0 0 1.872 0l3.75-10a1 1 0 0 0-1.872-.702l-2.814 7.503z"></svg:path>`,
})
export class MynauiLetterVSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
