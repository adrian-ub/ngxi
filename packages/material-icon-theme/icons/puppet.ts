import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemePuppetIcon],svg[material-icon-theme-puppet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M6 2h8v8H6zm12 10h8v8h-8zM6 22h8v8H6z"></svg:path><svg:path fill="#fbc02d" d="m7.888 6.192l1.92-2.305l14.304 11.921l-1.92 2.305z"></svg:path><svg:path fill="#fbc02d" d="m7.888 25.808l14.303-11.92l1.921 2.304l-14.303 11.92z"></svg:path>`,
})
export class MaterialIconThemePuppetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
