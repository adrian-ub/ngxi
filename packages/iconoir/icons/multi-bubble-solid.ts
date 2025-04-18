import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMultiBubbleSolidIcon],svg[iconoir-multi-bubble-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.25 16.5a6.25 6.25 0 1 1 3.374 5.55l-2.212.412a.75.75 0 0 1-.874-.874l.412-2.212a6.2 6.2 0 0 1-.7-2.876"></svg:path><svg:path d="M22.75 10A8.75 8.75 0 0 0 14 1.25c-4.266 0-8.098 3.25-8.662 7.509l-.002.004v-.008v.008l-.006.063l-.02.238a7.75 7.75 0 0 1 9.628 9.622a10 10 0 0 0 .38-.037l.047-.006l.014-.001l.004-.001h.002l.017-.003a8.7 8.7 0 0 0 2.726-.922l3.335.621a.75.75 0 0 0 .874-.874l-.62-3.335A8.7 8.7 0 0 0 22.75 10"></svg:path></svg:g>`,
})
export class IconoirMultiBubbleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
