import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHouzzIcon],svg[mdi-houzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14 20.95h6V10.78L8 7.34V3.05H4v17.9h6v-5.64h4v5.64z" fill="currentColor"></svg:path>`,
})
export class MdiHouzzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
