import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCoatRackIcon],svg[mdi-coat-rack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.33 7.78a1 1 0 0 0-1.67 1.11A2 2 0 1 1 13 10V7.82a3 3 0 1 0-2 0V10a2 2 0 1 1-3.66-1.11a1 1 0 1 0-1.67-1.11A4 4 0 0 0 11 13.46V20a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2v-6.54a4 4 0 0 0 5.33-5.68M12 4a1 1 0 1 1-1 1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiCoatRackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
