import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDiceFourLightIcon],svg[ph-dice-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18Zm-100-92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m56 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-56 56a10 10 0 1 1-10-10a10 10 0 0 1 10 10m56 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
