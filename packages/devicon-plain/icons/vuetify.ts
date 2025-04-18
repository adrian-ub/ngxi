import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainVuetifyIcon],svg[devicon-plain-vuetify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.668 10.668L33.34 63.797l1.605 2.793l22.883-39.65l9.399-16.273Zm76.336 0L65.297 34.414L40.84 76.79L64 116.922l30.672-53.125l30.66-53.129Zm0 0"></svg:path>`,
})
export class DeviconPlainVuetifyIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
