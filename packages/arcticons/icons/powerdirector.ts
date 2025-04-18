import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPowerdirectorIcon],svg[arcticons-powerdirector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.514 35.107H4.5V12.893h30.014m-30.014 0l30.014 22.214m0-22.214L4.5 35.107"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.692 24l7.822 5.358V18.643zM43.5 34.733V13.267m-4.493 17.659V17.074"></svg:path>`,
})
export class ArcticonsPowerdirectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
