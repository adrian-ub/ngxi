import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTechcombankIcon],svg[arcticons-techcombank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24.02L30.515 11.355l-6.516 6.334l6.516 6.333l-6.516 6.332l6.516 6.293zM24 17.689l-6.472 6.333L24 30.353l-6.47 6.292L4.5 24.021l13.028-12.667z"></svg:path>`,
})
export class ArcticonsTechcombankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
