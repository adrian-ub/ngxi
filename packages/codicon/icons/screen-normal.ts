import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconScreenNormalIcon],svg[codicon-screen-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4H1V3h2V1h1v2.5zM13 3V1h-1v2.5l.5.5H15V3zm-1 9.5V15h1v-2h2v-1h-2.5zM1 12v1h2v2h1v-2.5l-.5-.5zm11-1.5l-.5.5h-7l-.5-.5v-5l.5-.5h7l.5.5zM10 7H6v2h4z"></svg:path>`,
})
export class CodiconScreenNormalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
