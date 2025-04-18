import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorTextSize3SolidIcon],svg[bubbles-editor-text-size-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3.31V1.834h4.5V18H4.973a1 1 0 1 0 0 2h5.055a1 1 0 1 0 0-2H8.5V1.834H13V3.31a1 1 0 1 0 2 0V1.659c0-.444-.153-.892-.459-1.242a1.68 1.68 0 0 0-1.263-.584H1.722C1.22-.167.768.063.46.417C.153.767 0 1.215 0 1.659v1.652a1 1 0 1 0 2 0m13.401 5.724c.354-.065.72-.036 1.055.083s.619.32.825.575c.207.254.329.55.36.855a1.57 1.57 0 0 1-.174.894c-.147.282-.38.527-.679.702c-.3.176-.65.272-1.012.272a1 1 0 0 0-.001 2c.36 0 .71.097 1.01.272c.298.175.53.42.677.701a1.57 1.57 0 0 1-.183 1.747a1.87 1.87 0 0 1-.822.576c-.334.12-.7.15-1.053.086a1.94 1.94 0 0 1-.928-.44a1.7 1.7 0 0 1-.517-.794a1 1 0 1 0-1.919.565c.199.674.59 1.275 1.124 1.738a3.94 3.94 0 0 0 1.883.899c.698.127 1.42.068 2.086-.172a3.87 3.87 0 0 0 1.7-1.2a3.57 3.57 0 0 0 .4-3.934a3.7 3.7 0 0 0-.813-1.042c.333-.297.611-.65.82-1.048a3.57 3.57 0 0 0-.407-3.939a3.87 3.87 0 0 0-1.707-1.198a4.04 4.04 0 0 0-2.09-.164a3.94 3.94 0 0 0-1.882.909a3.7 3.7 0 0 0-1.115 1.748a1 1 0 1 0 1.922.552c.085-.298.26-.576.513-.798s.573-.379.927-.445" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorTextSize3SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
