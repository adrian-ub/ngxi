import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainAxiosIcon],svg[devicon-plain-axios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m34 43.978l27.38-22.913l.038 91.495l-9.32 7.74l-.153-76.091zm62.962 38.345l-27.38 22.912l-.038-91.495L78.863 6l.154 76.091z"></svg:path>`,
})
export class DeviconPlainAxiosIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
