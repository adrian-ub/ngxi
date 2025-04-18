import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStackPlusThinIcon],svg[ph-stack-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 200a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4m-14-75.46l-94 54.83l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l96-56a4 4 0 1 0-4-6.92M28 80a4 4 0 0 1 2-3.46l96-56a4 4 0 0 1 4 0l96 56a4 4 0 0 1 0 6.92l-96 56a4 4 0 0 1-4 0l-96-56A4 4 0 0 1 28 80m11.94 0L128 131.37L216.06 80L128 28.63ZM142 219.21l-14 8.16l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l16-9.34a4 4 0 1 0-4-6.91"></svg:path>`,
})
export class PhStackPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
