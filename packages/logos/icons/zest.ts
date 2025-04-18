import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosZestIcon],svg[logos-zest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M82.425 0l-46.13 79.9L59.1 119.287L127.937.056L82.425 0zm92.456.113L150.873.084L70.591 139.135l12.03 20.777l92.456.113l46.13-79.899L174.881.113zM11.957 91.29C5.354 91.29 0 85.978 0 79.425c0-6.55 5.354-11.862 11.957-11.862c6.603 0 11.957 5.312 11.957 11.863c0 6.551-5.354 11.862-11.957 11.862zm232.087 0c-6.603 0-11.957-5.312-11.957-11.864c0-6.55 5.354-11.862 11.957-11.862c6.603 0 11.957 5.312 11.957 11.863c0 6.551-5.354 11.862-11.957 11.862z" fill="#26CDAF"></svg:path>`,
})
export class LogosZestIcon {
  readonly viewBox = input("0 0 256 161")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
