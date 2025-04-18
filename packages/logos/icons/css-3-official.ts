import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosCss3OfficialIcon],svg[logos-css-3-official-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#444" d="m100.902 231.618l116.456-38.653L256 0H37.867L29.57 43.056h174.812l-5.443 27.49H23.862L15.3 113.602h174.823l-9.602 49.284l-70.547 23.076l-60.955-23.076l4.16-21.528H10.123L0 192.965z"></svg:path>`,
})
export class LogosCss3OfficialIcon {
  readonly viewBox = input("0 0 256 232")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
