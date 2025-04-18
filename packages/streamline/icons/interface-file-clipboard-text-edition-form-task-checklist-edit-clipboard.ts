import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardTextEditionFormTaskChecklistEditClipboardIcon],svg[streamline-interface-file-clipboard-text-edition-form-task-checklist-edit-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="M4.5 5.5h5M4.5 8h5m-5 2.5h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardTextEditionFormTaskChecklistEditClipboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
