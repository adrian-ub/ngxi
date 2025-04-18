import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionVerticalAc24RegularIcon],svg[fluent-text-direction-vertical-ac-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M6.75 3a.75.75 0 0 0-.75.75v14.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V3.75A.75.75 0 0 0 6.75 3zm8.75 11.75a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.69zm4-11a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0V8.5h1.25a.75.75 0 0 0 0-1.5H19.5V3.75zM10.75 4a.75.75 0 0 0 0 1.5h4.245c-.162 1.634-1.328 4.092-4.46 5.032a.75.75 0 0 0 .43 1.436c4.39-1.317 5.726-5.15 5.532-7.286A.75.75 0 0 0 15.75 4h-5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentTextDirectionVerticalAc24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
