import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGroup01Icon],svg[hugeicons-group-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.125 6.25c-.55 0-1 .45-1 1s.45 1 1 1h.01c.55 0 1-.45 1-1s-.45-1-1-1zm4 .25c-.41 0-.75.34-.75.75s.34.75.75.75h12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-1 5.75c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1h-.01c-.55 0-1-.45-1-1m1 4c-.55 0-1 .45-1 1s.45 1 1 1h.01c.55 0 1-.45 1-1s-.45-1-1-1zm3.25-4c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75h-8c-.41 0-.75-.34-.75-.75m.75 4.25c-.41 0-.75.34-.75.75s.34.75.75.75h8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsGroup01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
