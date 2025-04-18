import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrimaAssicurazioniIcon],svg[arcticons-prima-assicurazioni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.508 14.166l5.924-2.752V38.74m0-13.663c0 3.562 8.794 5.797 12.798 2.487c2.625-2.17 2.263-4.639 2.218-7.875c-.05-3.466.23-7.498-2.779-9.237c-4.724-2.73-9.277.047-9.277.047"></svg:path>`,
})
export class ArcticonsPrimaAssicurazioniIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
