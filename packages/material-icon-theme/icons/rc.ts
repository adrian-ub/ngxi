import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRcIcon],svg[material-icon-theme-rc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M4 28V8H2v21.5a.5.5 0 0 0 .5.5H24v-2Z"></svg:path><svg:path fill="#0288d1" d="M29.5 2h-21a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5h21a.5.5 0 0 0 .5-.5v-21a.5.5 0 0 0-.5-.5M26 8.04a3.4 3.4 0 0 0-.56-.04H21a5 5 0 0 0 0 10h4.44a3.4 3.4 0 0 0 .56-.04V22h-5a9 9 0 0 1 0-18h5Z"></svg:path>`,
})
export class MaterialIconThemeRcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
