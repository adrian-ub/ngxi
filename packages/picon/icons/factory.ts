import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFactoryIcon],svg[picon-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2v4l3-3v3l3-3v7H0"></svg:path>`,
})
export class PiconFactoryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
