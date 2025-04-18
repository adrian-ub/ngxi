import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ChevronDownCircleFillIcon],svg[f7-chevron-down-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m2.437-16.758c-1.523 1.618-3.351 1.618-4.898 0l-9.633-10.265c-.75-.797-.75-1.899-.07-2.602c.75-.797 1.922-.82 2.625-.047L28 32.312l9.539-10.078c.703-.773 1.875-.75 2.625.047c.68.703.68 1.805-.07 2.602Z"></svg:path>`,
})
export class F7ChevronDownCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
