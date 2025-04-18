import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBottleSodaClassicIcon],svg[mdi-bottle-soda-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13.77a3 3 0 0 0 0 4.46V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.77a3 3 0 0 0 0-4.46V9a12.3 12.3 0 0 0 1.91-5H10V2h4v2h-.91A12.3 12.3 0 0 0 15 9Z"></svg:path>`,
})
export class MdiBottleSodaClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
