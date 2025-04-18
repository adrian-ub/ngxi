import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFont24RegularIcon],svg[fluent-text-font-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a.75.75 0 0 1 .704.49l2.952 7.985l.012.032l.223.602l-.829 2.086l-.626-1.694H4.564l-1.112 3.01a.75.75 0 0 1-1.407-.521l1.288-3.483l.012-.033L6.297 2.49A.75.75 0 0 1 7.001 2m-1.88 8h3.762L7 4.914zm8.687-3.527a.75.75 0 0 1 1.394 0l5.555 14.031h.494a.75.75 0 1 1 0 1.5H18.75a.75.75 0 1 1 0-1.5h.392l-1.19-3.004h-6.91L9.85 20.504h.399a.75.75 0 1 1 0 1.5H7.75a.75.75 0 1 1 0-1.5h.486zM17.359 16l-2.856-7.215L11.639 16z"></svg:path>`,
})
export class FluentTextFont24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
