import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsStaremptyIcon],svg[ls-starempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M630 739L389 614L148 739l47-267L0 283l269-39L389 0l120 244l269 39l-194 189zM278 300l-155 23l111 108c13 13 20 32 17 50l-26 154l137-73c8-4 18-6 27-6s19 2 27 6l137 73l-26-154c-3-18 4-37 17-50l111-108l-154-23c-18-3-35-15-43-32l-69-139l-68 139c-8 17-25 29-43 32"></svg:path>`,
})
export class LsStaremptyIcon {
  readonly viewBox = input("0 0 778 739")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
