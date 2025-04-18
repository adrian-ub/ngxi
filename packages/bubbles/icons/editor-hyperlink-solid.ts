import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorHyperlinkSolidIcon],svg[bubbles-editor-hyperlink-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#bubblesEditorHyperlinkSolid0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M1.333 7.072A4.53 4.53 0 0 1 4.6 5.667h1.202c.651 0 1.293.145 1.884.422c.59.277 1.115.68 1.54 1.178a1 1 0 1 1-1.521 1.299a2.6 2.6 0 0 0-.868-.666a2.5 2.5 0 0 0-1.038-.233H4.6a2.53 2.53 0 0 0-1.824.79A2.83 2.83 0 0 0 2 10.417c0 .742.283 1.446.776 1.959c.49.511 1.148.79 1.824.79h1.199c.356 0 .71-.08 1.037-.234c.329-.154.625-.38.87-.665a1 1 0 0 1 1.52 1.299c-.426.498-.95.9-1.54 1.177a4.5 4.5 0 0 1-1.884.423H4.6a4.53 4.53 0 0 1-3.267-1.405A4.83 4.83 0 0 1 0 10.417a4.83 4.83 0 0 1 1.333-3.345m12.865-1.405H15.4c1.234 0 2.408.51 3.267 1.405A4.83 4.83 0 0 1 20 10.416a4.83 4.83 0 0 1-1.333 3.345a4.53 4.53 0 0 1-3.267 1.406h-1.202a4.5 4.5 0 0 1-1.883-.424a4.6 4.6 0 0 1-1.54-1.177a1 1 0 1 1 1.52-1.299c.244.286.54.512.869.666c.328.153.681.232 1.037.233h1.2c.675 0 1.332-.279 1.823-.79a2.83 2.83 0 0 0 .776-1.96a2.83 2.83 0 0 0-.776-1.959a2.53 2.53 0 0 0-1.824-.79h-1.199c-.356 0-.71.08-1.037.233c-.328.154-.625.38-.869.666a1 1 0 0 1-1.521-1.299c.426-.498.95-.9 1.54-1.178a4.45 4.45 0 0 1 1.884-.422M5.8 9.416a1 1 0 1 0 0 2h8.4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesEditorHyperlinkSolid0"><svg:path fill="#fff" d="M0 0h20v20H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesEditorHyperlinkSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
