import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionVertical20FilledIcon],svg[fluent-text-direction-vertical-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72zm8 9a.75.75 0 0 1 1.5 0v1.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.747.747 0 0 1-1.06 0l-2-2a.76.76 0 0 1 0-1.07a.75.75 0 0 1 1.06.01l.72.72zM13.5 3a.75.75 0 0 1 .696.471l3 7.5a.75.75 0 0 1-1.392.557L14.992 9.5h-2.984l-.812 2.028a.75.75 0 0 1-1.392-.556l3-7.5A.75.75 0 0 1 13.5 3m0 2.77L12.608 8h1.784z"></svg:path>`,
})
export class FluentTextDirectionVertical20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
