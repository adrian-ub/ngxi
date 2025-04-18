import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatThermometerIcon],svg[fluent-emoji-flat-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F4F4F4" d="M21.74 16.08L8.83 3.17a4.01 4.01 0 0 0-5.66 0a4.01 4.01 0 0 0 0 5.66l12.91 12.91c-.39 2.18.26 4.5 1.94 6.18a7.007 7.007 0 0 0 9.9 0a7.007 7.007 0 0 0 0-9.9c-1.68-1.68-4-2.32-6.18-1.94"></svg:path><svg:path fill="#F8312F" d="M4.59 7.42c-.78-.78-.78-2.05 0-2.83s2.04-.78 2.83 0l13.724 13.724a5 5 0 1 1-2.83 2.83z"></svg:path><svg:path fill="#000" d="M10.23 4.6L8.11 6.72a.996.996 0 1 0 1.41 1.41l2.12-2.12zm2.12 6.37l2.12-2.12l1.41 1.41l-2.12 2.12a.996.996 0 1 1-1.41-1.41m4.24 4.24l2.12-2.12l1.41 1.41L18 16.62a.996.996 0 1 1-1.41-1.41"></svg:path><svg:path fill="#FF8687" d="M24.97 23.97a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class FluentEmojiFlatThermometerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
