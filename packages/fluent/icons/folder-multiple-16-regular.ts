import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderMultiple16RegularIcon],svg[fluent-folder-multiple-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3A1.5 1.5 0 0 0 2 4.5V5h3.086a.5.5 0 0 0 .353-.146L6.293 4l-.854-.854A.5.5 0 0 0 5.086 3zM1 4.441q0-.024.002-.047A2.5 2.5 0 0 1 3.5 2h1.586a1.5 1.5 0 0 1 1.06.44L7.207 3.5H10.5A2.5 2.5 0 0 1 13 6v3.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 1 9.5zm6.207.059l-1.06 1.06A1.5 1.5 0 0 1 5.085 6H2v3.5A1.5 1.5 0 0 0 3.5 11h7A1.5 1.5 0 0 0 12 9.5V6a1.5 1.5 0 0 0-1.5-1.5zM14 6c.607.456 1 1.182 1 2v1.5a4.5 4.5 0 0 1-4.5 4.5h-5a2.5 2.5 0 0 1-2-1h7A3.5 3.5 0 0 0 14 9.5z"></svg:path>`,
})
export class FluentFolderMultiple16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
