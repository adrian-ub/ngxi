import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRedoIcon],svg[subway-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M354.5 65.1H236.3l118.2 118.2H137.8C61.7 183.2 0 244.9 0 321.1c0 76.1 61.7 137.8 137.8 137.8v-78.8c-32.6 0-59.1-26.4-59.1-59.1c0-32.6 26.4-59.1 59.1-59.1h216.6L236.3 380.2h118.2L512 222.6z"></svg:path>`,
})
export class SubwayRedoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
