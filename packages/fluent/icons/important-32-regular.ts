import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImportant32RegularIcon],svg[fluent-important-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a4 4 0 0 1 8 0c0 1.45-.421 3.348-1.046 5.315c-.613 1.932-1.372 3.776-1.942 5.066c-.158.356-.532.619-1.012.619s-.854-.263-1.012-.62c-.57-1.289-1.329-3.133-1.942-5.065C12.42 11.348 12 9.45 12 8m4-6a6 6 0 0 0-6 6c0 3.523 1.986 8.536 3.16 11.19C13.654 20.31 14.773 21 16 21s2.345-.69 2.84-1.81C20.015 16.536 22 11.522 22 8a6 6 0 0 0-6-6m1.5 24.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m2 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path>`,
})
export class FluentImportant32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
