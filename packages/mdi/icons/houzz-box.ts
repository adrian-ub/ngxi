import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHouzzBoxIcon],svg[mdi-houzz-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m8.5 15.71H18v-7.62L9 8.5V5.29H6v13.42h4.5V14.5h3v4.21z" fill="currentColor"></svg:path>`,
})
export class MdiHouzzBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
