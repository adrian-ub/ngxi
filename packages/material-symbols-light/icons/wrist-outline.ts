import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWristOutlineIcon],svg[material-symbols-light-wrist-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.192 20.708L6.485 16H1.692v-1H6.9l4.123 4.137l.02-.02q.21-.211.24-.49t-.106-.548L9.875 15.5h9.933q.212 0 .356.144t.144.357t-.144.356t-.356.143H11.51l.534 1.07q.348.701.205 1.456t-.683 1.295zM1.692 9V8h4.292l1.293-1.298q.344-.341.79-.521Q8.512 6 8.998 6h9.81q.212 0 .356.144t.144.357t-.144.356t-.356.143H8.883q-.235 0-.44.088q-.206.087-.376.25L6.4 9zm12.616 4.327v-1h7.5q.212 0 .356.144t.144.357t-.144.356t-.356.143zm0-3.154v-1h6.5q.212 0 .356.144t.144.357t-.144.356t-.356.143z"></svg:path>`,
})
export class MaterialSymbolsLightWristOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
