import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSlideLibrarySharpIcon],svg[material-symbols-slide-library-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V7h2v11h14v2zm4-4V4h9.4l-2 2H8v8h12V8.6l2-2V16zm7.5-4q-.575 0-1.112-.262T11.5 11q.425 0 .713-.288T12.5 10q0-.625.438-1.062T14 8.5t1.063.438T15.5 10q0 .825-.587 1.413T13.5 12m3.275-3L15 7.225L19.45 2.8l1.75 1.75z"></svg:path>`,
})
export class MaterialSymbolsSlideLibrarySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
