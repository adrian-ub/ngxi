import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopStarOffIcon],svg[pepicons-pop-star-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.705 17.886L10 15.97l4.295 1.915a1 1 0 0 0 1.402-1.019l-.494-4.677l3.148-3.493a1 1 0 0 0-.535-1.647l-4.6-.976L10.866 2a1 1 0 0 0-1.732 0l-2.35 4.074l-4.6.976a1 1 0 0 0-.535 1.647l3.148 3.494l-.494 4.676a1 1 0 0 0 1.402 1.018m3.888-3.924l-3.119 1.39l.359-3.395a1 1 0 0 0-.252-.774L4.295 8.646l3.34-.708a1 1 0 0 0 .66-.478L10 4.502l1.706 2.958a1 1 0 0 0 .659.478l3.34.708l-2.286 2.537a1 1 0 0 0-.252.774l.359 3.396l-3.119-1.39a1 1 0 0 0-.814 0" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopStarOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
