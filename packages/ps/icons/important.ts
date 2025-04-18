import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psImportantIcon],svg[ps-important-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 280h42q18 0 30.5-12.5T128 237V45q0-17-12.5-29.5T85 3H43Q25 3 12.5 15.5T0 45v192q0 18 12.5 30.5T43 280m0-235h42v192H43zM0 387q0 17 12.5 29.5T43 429h42q18 0 30.5-12.5T128 387v-22q0-17-12.5-29.5T85 323H43q-18 0-30.5 12.5T0 365zm43-22h42v22H43z"></svg:path>`,
})
export class PsImportantIcon {
  readonly viewBox = input("0 0 128 472")
  readonly width = input("0.28em")
  readonly height = input("1em")
}
