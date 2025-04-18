import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1MaleSignIcon],svg[noto-v1-male-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fcc21b"><svg:path d="M119.175 9.018v41.26h-16.42V9.018z"></svg:path><svg:path d="M119.278 25.432h-41.26V9.012h41.26z"></svg:path><svg:path d="M110.389 29.414L78.873 60.93l-11.61-11.61l31.515-31.516z"></svg:path><svg:path d="M77.49 50.7c-15.96-15.96-41.84-15.96-57.8 0s-15.96 41.84 0 57.8s41.84 15.96 57.8 0s15.96-41.84 0-57.8M31.61 96.58c-9.38-9.38-9.38-24.58 0-33.96s24.58-9.38 33.96 0s9.38 24.58 0 33.96c-9.37 9.38-24.58 9.38-33.96 0"></svg:path></svg:g>`,
})
export class NotoV1MaleSignIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
