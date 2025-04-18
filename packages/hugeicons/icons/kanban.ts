import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKanbanIcon],svg[hugeicons-kanban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22.572c3.91 0 5.87 0 7.38-1.1c.49-.35.91-.78 1.27-1.27c1.1-1.51 1.1-3.47 1.1-7.38s0-5.87-1.1-7.38c-.35-.49-.78-.92-1.27-1.27c-1.51-1.1-3.47-1.1-7.38-1.1s-5.87 0-7.38 1.1c-.49.35-.91.78-1.27 1.27c-1.1 1.51-1.1 3.47-1.1 7.38s0 5.87 1.1 7.38c.35.49.78.92 1.27 1.27c1.51 1.1 3.47 1.1 7.38 1.1m0-18c3.58 0 5.38 0 6.5.81c.36.26.68.58.94.94c.81 1.12.81 2.92.81 6.5s0 5.38-.81 6.5c-.26.36-.58.68-.94.94c-1.12.81-2.92.81-6.5.81s-5.38 0-6.5-.81c-.36-.26-.68-.58-.94-.94c-.81-1.12-.81-2.92-.81-6.5s0-5.38.81-6.5c.26-.36.58-.68.94-.94c1.12-.81 2.92-.81 6.5-.81m4.25 13.25c0 .41.34.75.75.75s.75-.34.75-.75v-10c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm-10-3c0 .41.34.75.75.75s.75-.34.75-.75v-7c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm5-3c0 .41.34.75.75.75s.75-.34.75-.75v-4c0-.41-.34-.75-.75-.75s-.75.34-.75.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsKanbanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
