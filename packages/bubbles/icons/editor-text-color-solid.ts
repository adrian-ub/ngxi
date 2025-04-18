import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorTextColorSolidIcon],svg[bubbles-editor-text-color-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.006.912c-.271 0-.534.051-.76.2a1.5 1.5 0 0 0-.52.64L1.803 13.074h-.64a.96.96 0 0 0 0 1.92h2.56a.96.96 0 0 0 .961-.96c0-.464-.403-.75-.84-.84l1.08-2.48h6.161l1.08 2.48c-.437.09-.84.376-.84.84c0 .53.43.96.96.96h2.561a.96.96 0 0 0 0-1.92h-.64L9.286 1.752a1.5 1.5 0 0 0-.52-.64c-.226-.149-.49-.2-.76-.2m0 2.72l2.24 5.161h-4.48z"></svg:path>`,
})
export class BubblesEditorTextColorSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
