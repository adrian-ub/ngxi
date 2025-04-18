import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTwineIcon],svg[material-icon-theme-twine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M4.229 3.119h6.657v17.755H4.23z"></svg:path><svg:path fill="#69f0ae" d="M4.229 17.545c0-12.207 15.535-12.207 15.535-12.207v6.658s-8.877 0-8.877 5.549v3.329H4.229z"></svg:path>`,
})
export class MaterialIconThemeTwineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
