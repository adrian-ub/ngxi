import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidSigmaIcon],svg[fa-solid-sigma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 32H52.03C32.37 32 14.59 42.89 5.68 60.44c-8.91 17.53-7.25 38.31 4.31 54.16L132.66 256 10.03 397.36c-11.59 15.89-13.25 36.67-4.34 54.2C14.59 469.11 32.37 480 52.03 480H352c17.67 0 32-14.33 32-32v-72c0-13.25-10.75-24-24-24h-48c-13.25 0-24 10.75-24 24v8H142.25l109.09-128-109.09-128H288v8c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V64c0-17.67-14.33-32-32-32z" fill="currentColor"></svg:path>`,
})
export class FaSolidSigmaIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
