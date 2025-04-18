import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorTextSize1SolidIcon],svg[bubbles-editor-text-size-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 1.834v1.5a1 1 0 0 1-2 0V1.666C0 1.237.139.795.428.442a1.63 1.63 0 0 1 1.257-.609h10.963c.518 0 .963.252 1.257.61c.29.352.429.794.429 1.224v1.666a1 1 0 1 1-2 0v-1.5H8.167v16.334h1.398a1 1 0 1 1 0 2H4.769a1 1 0 1 1 0-2h1.398V1.834z"></svg:path><svg:path d="M15.398 7.483a1.82 1.82 0 0 0-1.775.188l-2.528 1.825a1 1 0 1 0 1.171 1.622l2.158-1.559v8.608H12.5a1 1 0 1 0 0 2h5.833a1 1 0 1 0 0-2h-1.91V9.008c0-.338-.106-.66-.294-.93a1.73 1.73 0 0 0-.731-.595"></svg:path></svg:g>`,
})
export class BubblesEditorTextSize1SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
