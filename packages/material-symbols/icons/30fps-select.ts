import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols30fpsSelectIcon],svg[material-symbols-30fps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14v-2h5v-2H4V8h5V6H4V4h5q.825 0 1.413.588T11 6v1.5q0 .65-.425 1.075T9.5 9q.65 0 1.075.425T11 10.5V12q0 .825-.587 1.413T9 14zm14 0h-3q-.825 0-1.412-.587T13 12V6q0-.825.588-1.412T15 4h3q.825 0 1.413.588T20 6v6q0 .825-.587 1.413T18 14m0-2V6h-3v6zM3 22v-5h2v5zm4 0v-5h2v5zm4 0v-5h2v5zm4 0v-5h6v5z"></svg:path>`,
})
export class MaterialSymbols30fpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
