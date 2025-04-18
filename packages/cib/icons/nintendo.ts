import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibNintendoIcon],svg[cib-nintendo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 .803h9.469L22.598 22V.803h9.401v30.395h-9.385L9.411 10.001v21.197H-.001z"></svg:path>`,
})
export class CibNintendoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
