import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFastDownButtonIcon],svg[openmoji-fast-down-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m55 31l-9.111 18.795l-7.668 15.817c-.897 1.85-3.545 1.85-4.442 0L26.11 49.795L17 31"></svg:path><svg:path d="m55 5l-9.111 18.882l-7.668 15.891c-.897 1.86-3.545 1.86-4.442 0l-7.668-15.89L17 5"></svg:path></svg:g>`,
})
export class OpenmojiFastDownButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
