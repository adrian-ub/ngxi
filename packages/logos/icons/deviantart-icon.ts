import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDeviantartIconIcon],svg[logos-deviantart-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#45AD47" d="M256 75.206V.004h-75.203l-7.505 7.57l-35.485 67.624l-11.158 7.528H0V186h69.626l6.201 7.5L0 338.396V413.6h75.201l7.507-7.567l35.487-67.627l11.156-7.526H256V227.605h-69.626l-6.195-7.551z"></svg:path>`,
})
export class LogosDeviantartIconIcon {
  readonly viewBox = input("0 0 256 414")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
