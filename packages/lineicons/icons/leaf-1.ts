import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLeaf1Icon],svg[lineicons-leaf-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.523 2a6.25 6.25 0 0 1 5.5 3.279A6.25 6.25 0 0 1 17.523 2h2.5a.75.75 0 0 1 .75.75v2.5a6.25 6.25 0 0 1-6.25 6.25h-1.75v9.75a.75.75 0 1 1-1.5 0V11.5h-1.75a6.25 6.25 0 0 1-6.25-6.25v-2.5a.75.75 0 0 1 .75-.75zm4.75 8V8.25a4.75 4.75 0 0 0-4.75-4.75h-1.75v1.75A4.75 4.75 0 0 0 9.523 10zm1.5 0h1.75a4.75 4.75 0 0 0 4.75-4.75V3.5h-1.75a4.75 4.75 0 0 0-4.75 4.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsLeaf1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
