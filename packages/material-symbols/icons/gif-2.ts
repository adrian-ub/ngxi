import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGif2Icon],svg[material-symbols-gif-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.825 0-1.412-.587T2 15V9q0-.825.588-1.412T4 7h4q.825 0 1.413.588T10 9H4v6h4v-2H6v-2h4v4q0 .825-.587 1.413T8 17zm8 0V7h2v10zm4 0V7h7v2h-5v2h4v2h-4v4z"></svg:path>`,
})
export class MaterialSymbolsGif2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
