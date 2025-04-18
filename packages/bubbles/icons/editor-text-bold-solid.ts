import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorTextBoldSolidIcon],svg[bubbles-editor-text-bold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.667a1.5 1.5 0 0 1 1.5-1.5h7.917c1.57 0 3.1.565 4.25 1.61C15.82 2.827 16.5 4.282 16.5 5.833a5.43 5.43 0 0 1-1.34 3.55q.534.296 1.003.685c1.239 1.033 2.004 2.498 2.004 4.099s-.765 3.066-2.005 4.098c-1.23 1.026-2.85 1.568-4.495 1.568H2.5a1.5 1.5 0 1 1 0-3h1V3.167h-1a1.5 1.5 0 0 1-1.5-1.5m5.5 15.166h5.167c1.007 0 1.93-.336 2.575-.872c.636-.53.925-1.184.925-1.794s-.289-1.264-.925-1.794c-.644-.537-1.568-.873-2.575-.873H6.5zm0-8.333V3.167h3.917c.861 0 1.662.312 2.232.83c.565.513.851 1.178.851 1.836s-.287 1.323-.851 1.837c-.57.517-1.37.83-2.232.83z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorTextBoldSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
