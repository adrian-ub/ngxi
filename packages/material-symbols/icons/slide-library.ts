import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSlideLibraryIcon],svg[material-symbols-slide-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V7h2v11h14v2zm4-4q-.825 0-1.412-.587T6 14V6q0-.825.588-1.412T8 4h7.4l-2 2H8v8h12V8.6l2-2V14q0 .825-.587 1.413T20 16zm5.5-4q-.575 0-1.112-.262T11.5 11q.425 0 .713-.288T12.5 10q0-.625.438-1.062T14 8.5t1.063.438T15.5 10q0 .825-.587 1.413T13.5 12m3.275-3L15 7.225l4.1-4.075q.15-.15.35-.15t.35.15l1.05 1.05q.15.15.15.35t-.15.35z"></svg:path>`,
})
export class MaterialSymbolsSlideLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
