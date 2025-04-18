import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconStackblitzIcon],svg[devicon-stackblitz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1389fd" d="M20 75.294h37.877L35.597 128L108 52.706H70.123L92.403 0z"></svg:path>`,
})
export class DeviconStackblitzIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
