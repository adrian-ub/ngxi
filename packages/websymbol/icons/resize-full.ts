import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolResizeFullIcon],svg[websymbol-resize-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 1v467L832 307L671 468q-29 29-69 29t-69-29t-29-69t29-69l161-161L533 1zM306 833l161 168H0V534l168 161l161-161q29-29 69-29t69 29t29 69t-29 69z"></svg:path>`,
})
export class WebsymbolResizeFullIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
