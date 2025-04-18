import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7NosignIcon],svg[f7-nosign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-.023-43.828c11.039 0 19.921 8.883 19.945 19.922c0 4.898-1.735 9.375-4.64 12.82L15.18 12.72c3.445-2.906 7.898-4.64 12.797-4.64M28 47.922c-11.063 0-19.9-8.86-19.9-19.922c0-4.875 1.711-9.328 4.594-12.773l28.102 28.101c-3.469 2.883-7.922 4.594-12.797 4.594"></svg:path>`,
})
export class F7NosignIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
