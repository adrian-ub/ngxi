import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfNextIcon],svg[wpf-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0M17.66 13.857l-6.229 4.949a.98.98 0 0 1-.951-.04a.97.97 0 0 1-.48-.816V8.051c0-.334.19-.644.479-.817a.99.99 0 0 1 .952-.039l6.229 4.948c.336.297.537.494.537.857s-.236.575-.537.857"></svg:path>`,
})
export class WpfNextIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
