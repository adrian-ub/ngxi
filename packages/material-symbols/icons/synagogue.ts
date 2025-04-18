import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSynagogueIcon],svg[material-symbols-synagogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8V7q0-.825.588-1.412T21 5t1.413.588T23 7v1zM1 8V7q0-.825.588-1.412T3 5t1.413.588T5 7v1zm0 13V9h4v12zm5 0V8l6-5l6 5v13h-4v-5q0-.825-.587-1.412T12 14t-1.412.588T10 16v5zm13 0V9h4v12zm-7-9.5q.625 0 1.063-.437T13.5 10t-.437-1.062T12 8.5t-1.062.438T10.5 10t.438 1.063T12 11.5"></svg:path>`,
})
export class MaterialSymbolsSynagogueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
