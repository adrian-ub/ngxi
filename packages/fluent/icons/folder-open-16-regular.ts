import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderOpen16RegularIcon],svg[fluent-folder-open-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5v4.6l.924-1.6A3 3 0 0 1 5.522 6h6.393A1.5 1.5 0 0 0 10.5 5H7a.5.5 0 0 1-.354-.146L4.94 3.146A.5.5 0 0 0 4.586 3H3.5A1.5 1.5 0 0 0 2 4.5m5.069 9.495L7 14H3.5A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2h1.086a1.5 1.5 0 0 1 1.06.44L7.207 4H10.5a2.5 2.5 0 0 1 2.458 2.041c1.647.3 2.586 2.18 1.704 3.709l-1.585 2.745a3 3 0 0 1-2.598 1.5zM5.522 7A2 2 0 0 0 3.79 8l-1.585 2.745a1.5 1.5 0 0 0 1.299 2.25h6.975a2 2 0 0 0 1.732-1l1.585-2.745a1.5 1.5 0 0 0-1.3-2.25z"></svg:path>`,
})
export class FluentFolderOpen16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
