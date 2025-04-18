import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCursor2Icon],svg[marketeq-cursor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M24.583 19.542L8.938 35.167a2.084 2.084 0 0 0 0 2.937l2.958 2.959a2.084 2.084 0 0 0 2.937 0l15.625-15.646"></svg:path><svg:path stroke="#306CFE" d="m30.458 25.417l2.75 5.104a2.083 2.083 0 0 0 3.855-.334L41.667 11A2.188 2.188 0 0 0 39 8.333l-19.187 4.604a2.083 2.083 0 0 0-.334 3.855l5.104 2.75"></svg:path></svg:g>`,
})
export class MarketeqCursor2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
