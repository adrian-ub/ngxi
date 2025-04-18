import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormTextareaIcon],svg[mdi-form-textarea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9H4v14H2V7h11m10 2V7h-6V5a1 1 0 0 1 1-1h2V2h-2.5C17 2 16 2.45 16 3c0-.55-.95-1-1.5-1H12v2h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2v2h2.5c.55 0 1.5-.45 1.5-1c0 .55.95 1 1.5 1H20v-2h-2a1 1 0 0 1-1-1V9Z"></svg:path>`,
})
export class MdiFormTextareaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
