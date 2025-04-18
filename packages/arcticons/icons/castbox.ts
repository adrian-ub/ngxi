import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCastboxIcon],svg[arcticons-castbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.115 3L6.019 13.791v20.522L24.115 45l17.866-10.687V13.791zM13.394 21.243v5.514zm.023 2.748h4.93zm9.695-7.452V28.25zm4.678 1.083V28.35zm-9.42 1.222v12.618zm.029 3.243h4.63zm4.798 1.126h4.534zm14.263-.801v3.176m-5.006-5.07v6.964"></svg:path>`,
})
export class ArcticonsCastboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
