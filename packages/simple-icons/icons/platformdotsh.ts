import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPlatformdotshIcon],svg[simple-icons-platformdotsh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 0H0v9.541h24zm0 20.755H0V24h24zM0 12.618h24v4.892H0z"></svg:path>`,
})
export class SimpleIconsPlatformdotshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
