import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosVolarIcon],svg[logos-volar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosVolar0" x1="105.885%" x2="-.485%" y1="16.567%" y2="62.101%"><svg:stop offset="0%" stop-color="#7A85EC"></svg:stop><svg:stop offset="100%" stop-color="#3DDCFF"></svg:stop></svg:lineargradient><svg:path id="logosVolar1" d="M110.204 12.886C71.297-14.28 21.28 8.106 0 20.072l99.384 168.085l92.185-157.935c-15.254 4.202-45.89 7.433-81.365-17.336"></svg:path></svg:defs><svg:path fill="url(#logosVolar0)" d="M134.247 220.01c-2.777 4.809-9.718 4.809-12.494 0L.977 10.82C-1.799 6.011 1.671 0 7.224 0h241.552c5.553 0 9.023 6.011 6.247 10.82z"></svg:path><svg:g transform="translate(28.616 45.423)"><svg:mask id="logosVolar2" fill="#fff"><svg:use href="#logosVolar1"></svg:use></svg:mask><svg:path fill="#001AFF" d="M105.63 174.587c-2.776 4.81-9.717 4.81-12.493 0L-27.64-34.603c-2.777-4.808.694-10.82 6.247-10.82H220.16c5.553 0 9.023 6.012 6.246 10.82z" mask="url(#logosVolar2)"></svg:path></svg:g>`,
})
export class LogosVolarIcon {
  readonly viewBox = input("0 0 256 224")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
