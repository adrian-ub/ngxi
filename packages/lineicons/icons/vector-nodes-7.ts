import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsVectorNodes7Icon],svg[lineicons-vector-nodes-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.523 2.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.789v3.25h.79a.75.75 0 0 1 .75.75v.75h6v-.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.75v3.25h.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.75v-3.25h-.75a.75.75 0 0 1-.75-.75v-.75h-6v.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.71V6.5h-.71a.75.75 0 0 1-.75-.75zm12 10h1.5v-1.5h-1.5zm-9-1.5h-1.5v1.5h1.5zm0-6.25V3.5h-1.5V5zm9 14v1.5h1.5V19z"></svg:path>`,
})
export class LineiconsVectorNodes7Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
