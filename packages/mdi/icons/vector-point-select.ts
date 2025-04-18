import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPointSelectIcon],svg[mdi-vector-point-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l-5 2l5-11l5 11zM8 2h8v3h6v2h-6v3H8V7H2V5h6zm2 2v4h4V4z"></svg:path>`,
})
export class MdiVectorPointSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
