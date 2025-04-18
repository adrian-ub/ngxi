import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDmUnipdIcon],svg[arcticons-dm-unipd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h15.725v15.725H5.5M42.5 5.5v15.725H26.775V5.5m-5.55 37V26.775H5.5V42.5m37-15.725H26.775V42.5H42.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5a7.863 7.863 0 0 1 0 15.725h0zm37 0a7.863 7.863 0 0 1-15.725 0zm-37 37a7.863 7.863 0 0 1 15.725 0zm37 0a7.863 7.863 0 0 1 0-15.725z"></svg:path>`,
})
export class ArcticonsDmUnipdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
