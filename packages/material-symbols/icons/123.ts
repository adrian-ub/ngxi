import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols123Icon],svg[material-symbols-123-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 15v-4.5H4V9h3v6zM9 15v-2.5q0-.425.288-.712T10 11.5h2v-1H9V9h3.5q.425 0 .713.288T13.5 10v1.5q0 .425-.288.713t-.712.287h-2v1h3V15zm6 0v-1.5h3v-1h-2v-1h2v-1h-3V9h3.5q.425 0 .713.288T19.5 10v4q0 .425-.288.713T18.5 15z"></svg:path>`,
})
export class MaterialSymbols123Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
