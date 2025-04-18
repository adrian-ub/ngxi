import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdaIcon],svg[material-icon-theme-ada-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0277bd" d="m2 12l2.9-1.07c.25-1.1.87-1.73.87-1.73a3.996 3.996 0 0 1 5.65 0l1.41 1.41l6.31-6.7c.95 3.81 0 7.62-2.33 10.69L22 19.62s-8.47 1.9-13.4-1.95c-2.63-2.06-3.22-3.26-3.59-4.52zm5.04.21c.37.37.98.37 1.35 0s.37-.97 0-1.34a.96.96 0 0 0-1.35 0c-.37.37-.37.97 0 1.34"></svg:path>`,
})
export class MaterialIconThemeAdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
