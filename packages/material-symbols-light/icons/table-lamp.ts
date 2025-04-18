import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableLampIcon],svg[material-symbols-light-table-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.5v-1h7v1zm3-2.77V8.078q0-.617-.441-1.059q-.442-.441-1.059-.441h-3.808v2.846q0 .343-.232.576t-.575.232h-4.25q-.454 0-.687-.364T4.902 9.1L6.7 4.97q.212-.454.604-.712T8.179 4h.898q.658 0 1.127.463q.469.462.488 1.114H14.5q1.042 0 1.77.729q.73.73.73 1.771v9.654z"></svg:path>`,
})
export class MaterialSymbolsLightTableLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
