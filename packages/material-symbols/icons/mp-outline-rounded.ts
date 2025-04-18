import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMpOutlineRoundedIcon],svg[material-symbols-mp-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 10.5h1v2.25q0 .325.213.538t.537.212t.538-.213t.212-.537V10.5h1v3.75q0 .325.213.538t.537.212t.538-.213t.212-.537V10q0-.425-.288-.712T11.5 9H7q-.425 0-.712.288T6 10v4.25q0 .325.213.538T6.75 15t.538-.213t.212-.537zm7.5 3h2q.425 0 .713-.288T18 12.5V10q0-.425-.288-.712T17 9h-2.5q-.425 0-.712.288T13.5 10v4.25q0 .325.213.538t.537.212t.538-.213t.212-.537zm0-1.5v-1.5h1.5V12zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsMpOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
