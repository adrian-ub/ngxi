import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryNotebookIcon],svg[memory-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2v18h-1v1H4v-1H3v-2H1v-2h2v-4H1v-2h2V6H1V4h2V2h1V1h14v1zm-5 7h-1V8h-1v1h-1v1h-1V3H7v16h10V3h-2v7h-1zM3 4v2h2V4zm2 6H3v2h2zm0 6H3v2h2z"></svg:path>`,
})
export class MemoryNotebookIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
