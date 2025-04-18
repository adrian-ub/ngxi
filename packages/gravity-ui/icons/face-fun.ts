import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceFunIcon],svg[gravity-ui-face-fun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M4.75 9.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75c0 .686-.43 1.319-.974 1.746c-.57.447-1.358.754-2.276.754s-1.706-.307-2.276-.754c-.543-.427-.974-1.06-.974-1.746M10 7.5a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceFunIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
