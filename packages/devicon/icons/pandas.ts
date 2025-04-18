import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPandasIcon],svg[devicon-pandas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#130754" d="M46.236 7.567h13.99v29.047h-13.99Zm0 59.668h13.99V96.28h-13.99Z"></svg:path><svg:path fill="#ffca00" d="M46.236 45.092h13.99v13.705h-13.99Z"></svg:path><svg:path fill="#130754" d="M23.763 31.446h13.989V128h-13.99ZM68.245 91.2h13.99v29.046h-13.99Zm0-59.72h13.99v29.047h-13.99Z"></svg:path><svg:path fill="#e70488" d="M68.245 69.011h13.99v13.705h-13.99Z"></svg:path><svg:path fill="#130754" d="M90.248 0h13.99v96.554h-13.99Z"></svg:path>`,
})
export class DeviconPandasIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
