import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSectionIconIcon],svg[logos-section-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00A86B" d="m98.184 302.837l121.62 25.912V101.305l-121.62 25.812zm157.827 73.216L69.03 325.517V104.36l186.703-50.17l.267 321.874z"></svg:path><svg:path fill="#00A86B" d="M179.319 0L0 65.041v300.15l179.319 65.052zM31.954 347.564V82.69l111.557-34.431v333.725l-111.557-34.43z"></svg:path><svg:path fill="#038754" d="m179.319 109.88l17.693-3.744V69.973l-17.693 4.742zm0 245.437l17.693 4.776v-36.197l-17.693-3.777z"></svg:path>`,
})
export class LogosSectionIconIcon {
  readonly viewBox = input("0 0 256 431")
  readonly width = input("0.6em")
  readonly height = input("1em")
}
