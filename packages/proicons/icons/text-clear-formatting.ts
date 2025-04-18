import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextClearFormattingIcon],svg[proicons-text-clear-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.77 22.252h6.476m-9.69-7.733l5.925 5.925m-6.195-.808l1.078 1.078c.849.848 1.273 1.272 1.762 1.431c.43.14.894.14 1.324 0c.49-.159.913-.583 1.762-1.431l3.502-3.502c.848-.849 1.272-1.273 1.431-1.762c.14-.43.14-.894 0-1.324c-.159-.49-.583-.913-1.431-1.762l-1.078-1.078c-.849-.848-1.273-1.272-1.762-1.431a2.14 2.14 0 0 0-1.324 0c-.49.159-.913.583-1.762 1.431l-3.502 3.502c-.848.849-1.272 1.273-1.431 1.762c-.14.43-.14.894 0 1.324c.159.49.583.913 1.431 1.762M2.75 12.427L4.328 8.72m0 0h5.68m-5.68 0l2.417-5.678a.45.45 0 0 1 .845 0l2.418 5.678m0 0l1.137 2.673M14.09 2.75v5.739l.112-.096a3.195 3.195 0 0 1 6.202.158"></svg:path>`,
})
export class ProiconsTextClearFormattingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
