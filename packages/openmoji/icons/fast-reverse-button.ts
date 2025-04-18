import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFastReverseButtonIcon],svg[openmoji-fast-reverse-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m41 55l-18.795-9.111L6.388 38.22c-1.85-.897-1.85-3.545 0-4.442l15.817-7.668L41 17"></svg:path><svg:path d="m67 55l-18.882-9.111l-15.891-7.668c-1.86-.897-1.86-3.545 0-4.442l15.89-7.668L67 17"></svg:path></svg:g>`,
})
export class OpenmojiFastReverseButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
