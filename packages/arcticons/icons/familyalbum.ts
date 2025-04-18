import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFamilyalbumIcon],svg[arcticons-familyalbum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 21.366v14.28l9.92-9.08l10.08 9.2l10.08-9.16l9.92 8.96v-14.28l-9.93-8.91l-10.013 9.163l-10.126-9.305zm9.93-9.132l-.01 14.332m10.137-5.026L24 35.767m10.07-23.393l.01 14.231"></svg:path>`,
})
export class ArcticonsFamilyalbumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
