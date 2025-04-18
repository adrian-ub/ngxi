import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclescrewdriverIcon],svg[whh-circlescrewdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 704q-51 0-73.5-22.5T832 608l-8-12q-15-15-30-17.5t-28 5t-30 24.5l-32 32l-256-256v-64l-144-64l-48 48l64 144h64l256 256l-32 32q-17 17-24.5 30.5t-5 28T597 825l11 7q52 0 74 23t22 73l40 40q-110 56-232 56q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 122-56 232z"></svg:path>`,
})
export class WhhCirclescrewdriverIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
