import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFairemailIcon],svg[arcticons-fairemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.51 7.18c.84-.55.07-.55 3.49-.55s2.37-.13 3.49.55l12.83 10.07H7.68ZM7.68 17.25v2.5l12.39 9.71l2 1.3c2 1.13 2 1.13 3.93 0l2-1.3l12.39-9.71v-2.5l3.18 2.5v21.63H4.5V19.75Z"></svg:path>`,
})
export class ArcticonsFairemailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
