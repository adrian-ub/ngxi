import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardBlockEditTaskEditionBlockClipboardFormIcon],svg[streamline-interface-file-clipboard-block-edit-task-edition-block-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 13.5h-4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1H3m5 0h1.5a1 1 0 0 1 1 1v2"></svg:path><svg:rect width="5" height="2.5" x="3" y=".5" rx="1"></svg:rect><svg:circle cx="10.25" cy="10.25" r="3.25"></svg:circle><svg:path d="m7.95 12.55l4.6-4.6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardBlockEditTaskEditionBlockClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
