import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols7mpRoundedIcon],svg[material-symbols-7mp-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.6 7l-1.025 3.425q-.125.4.125.738t.675.337q.275 0 .5-.162t.3-.438l1.275-4.1q.15-.5-.15-.9t-.8-.4h-2.75q-.325 0-.537.213T10 6.25t.213.538t.537.212zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2.5-7h1v2.25q0 .325.213.538T9.25 17t.538-.213t.212-.537V14h1v3.75q0 .325.213.538t.537.212t.538-.213t.212-.537V13.5q0-.425-.288-.712T11.5 12.5H7q-.425 0-.712.288T6 13.5v4.25q0 .325.213.538t.537.212t.538-.213t.212-.537zm7.5 3h2q.425 0 .713-.288T18 16v-2.5q0-.425-.288-.712T17 12.5h-2.75q-.325 0-.537.213t-.213.537v4.5q0 .325.213.538t.537.212t.538-.213t.212-.537zm0-1.5V14h1.5v1.5z"></svg:path>`,
})
export class MaterialSymbols7mpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
