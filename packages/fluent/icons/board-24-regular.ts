import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoard24RegularIcon],svg[fluent-board-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.251 2.498a3.25 3.25 0 0 1 3.245 3.066l.005.184v12.004a3.25 3.25 0 0 1-3.25 3.25h-12a3.25 3.25 0 0 1-3.246-3.066L3 17.752V5.748a3.25 3.25 0 0 1 3.25-3.25zm-6.751 7l-7 .001v8.253l.007.16a1.75 1.75 0 0 0 1.743 1.59l5.25-.001zm8.5 6l-7 .001v4.002h5.25a1.75 1.75 0 0 0 1.75-1.75zm-1.749-11.5L13 3.997V14l7-.001l.001-8.25l-.007-.16a1.75 1.75 0 0 0-1.743-1.59M11.5 3.997l-5.25.001l-.143.006a1.75 1.75 0 0 0-1.606 1.744L4.5 8h7z"></svg:path>`,
})
export class FluentBoard24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
