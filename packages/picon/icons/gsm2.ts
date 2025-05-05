import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGsm2Icon],svg[picon-gsm2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v3h2V2M0 8l8-8v8"></svg:path>`,
})
export class PiconGsm2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
