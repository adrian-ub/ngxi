import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEjsIcon],svg[material-icon-theme-ejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#ffca28" d="M8.046 4.862L.908 12l7.138 7.138l2.71-2.691L6.308 12l4.446-4.447z"></svg:path><svg:ellipse cx="14.543" cy="7.812" stroke="#ffca28" stroke-width="1.455" rx="2.101" ry="2.798"></svg:ellipse><svg:path fill="#ffca28" d="m20.616 4.152l1.47.69l-7.783 15.005l-1.47-.69z"></svg:path><svg:ellipse cx="20.35" cy="16.198" stroke="#ffca28" stroke-width="1.455" rx="2.101" ry="2.798"></svg:ellipse></svg:g>`,
})
export class MaterialIconThemeEjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
