import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconJhipsterIcon],svg[devicon-jhipster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3474ab" d="M74.773 59.758S11.268 22.907 5.78 45.827c-5.49 22.92-11.663 40.34 5.254 43.56s63.74-29.629 63.74-29.629z"></svg:path><svg:path fill="#4289c7" d="M63.795 54.216c18.19-9.417 54.229-25.553 58.348-8.464c5.543 22.994 11.77 40.492-5.125 43.774c-11.856 2.303-38.52-13.247-53.308-22.684c-.022-11.171.107-1.616.085-12.626"></svg:path>`,
})
export class DeviconJhipsterIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
