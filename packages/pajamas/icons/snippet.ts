import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSnippetIcon],svg[pajamas-snippet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.625.1A.75.75 0 0 1 4.65.375L8 6.177L11.35.375a.75.75 0 1 1 1.3.75L8.864 7.677l1.97 3.412A2.503 2.503 0 0 1 14 13.5a2.5 2.5 0 1 1-4.425-1.595L7.999 9.176l-.26.45a.75.75 0 0 1-1.298-.751l.692-1.199L3.35 1.125A.75.75 0 0 1 3.625.1M5.5 13.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m5.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class PajamasSnippetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
