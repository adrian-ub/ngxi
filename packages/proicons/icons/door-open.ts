import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsDoorOpenIcon],svg[proicons-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.157 20.517h.593a2.5 2.5 0 0 0 2.5-2.5V5.75a2.5 2.5 0 0 0-2.5-2.5h-9.5c-.55 0-1.06.178-1.473.48m-1.02 13.742a1.5 1.5 0 0 0 .86 1.357l5.896 2.775a1.5 1.5 0 0 0 2.138-1.358V8.387a1.5 1.5 0 0 0-.86-1.356l-7.014-3.3m0 0A2.5 2.5 0 0 0 4.75 5.75v11.722"></svg:path><svg:circle cx="10.25" cy="12.75" r="1.25" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsDoorOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
