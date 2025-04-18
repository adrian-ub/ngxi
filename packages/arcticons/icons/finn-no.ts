import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinnNoIcon],svg[arcticons-finn-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.309 33.926H24v-18.66c0-.658.533-1.192 1.192-1.192h17.117c.658 0 1.191.534 1.191 1.192v17.468c0 .658-.533 1.192-1.191 1.192m-18.309 0H5.691A1.19 1.19 0 0 1 4.5 32.734V15.266c0-.658.533-1.192 1.191-1.192h5.314C18.182 14.074 24 19.893 24 27.07"></svg:path>`,
})
export class ArcticonsFinnNoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
