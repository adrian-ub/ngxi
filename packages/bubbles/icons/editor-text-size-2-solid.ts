import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorTextSize2SolidIcon],svg[bubbles-editor-text-size-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.453 0c.484 0 .938.213 1.26.578c.262.297.42.674.454 1.07l.008.17v1.636a1 1 0 0 1-1.994.117l-.006-.117V2l-4.5-.001V18h1.528a1 1 0 0 1 .117 1.993l-.117.007H5.148a1 1 0 0 1-.117-1.993L5.148 18h1.527V1.999h-4.5v1.455a1 1 0 0 1-.884.994l-.116.006a1 1 0 0 1-.993-.883l-.007-.117V1.819c0-.457.162-.9.462-1.24a1.7 1.7 0 0 1 1.1-.57L1.897 0zM16 7c1.005 0 1.972.384 2.69 1.071a3.65 3.65 0 0 1 1.135 2.636a4.76 4.76 0 0 1-.954 2.85l-.16.204l-3.399 4.069h3.513a1 1 0 0 1 .993.883l.007.117a1 1 0 0 1-.884.993l-.116.007h-5.65a1 1 0 0 1-.836-1.55l.068-.091l4.768-5.71a2.76 2.76 0 0 0 .65-1.771a1.65 1.65 0 0 0-.52-1.193A1.9 1.9 0 0 0 16 9c-.493 0-.963.187-1.306.515c-.292.28-.47.643-.51 1.027l-.01.165a1 1 0 1 1-2 0c0-.992.41-1.94 1.136-2.636A3.9 3.9 0 0 1 16 7"></svg:path>`,
})
export class BubblesEditorTextSize2SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
