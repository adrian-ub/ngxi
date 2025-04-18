import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpace3d32FilledIcon],svg[fluent-space-3d-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5V21h-.986l-4.392-5H27V7.5A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5V16h3.378l-4.391 5H3zM21.484 23H29v1.5a4.5 4.5 0 0 1-4.5 4.5h-1.146l-.4-1.299zm3.868-2h-4.494l-1.564-5h1.666zm-12.114 0h5.525l-1.565-5h-2.396zm6.15 2h-6.776l-1.877 6h10.526l-.215-.701l-.002-.005zm-6.682-7l-1.564 5H6.649l4.39-5zM3 24.5V23h7.516L8.64 29H7.5A4.5 4.5 0 0 1 3 24.5"></svg:path>`,
})
export class FluentSpace3d32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
