import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCercle8Icon],svg[subway-cercle-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M263 0C121.6 0 7 114.6 7 256s114.6 256 256 256s256-114.6 256-256S404.4 0 263 0m0 472.6c-119.6 0-216.6-97-216.6-216.6S143.4 39.4 263 39.4s216.6 97 216.6 216.6S382.7 472.6 263 472.6m0-393.8c-97.9 0-177.2 79.3-177.2 177.2S165.2 433.2 263 433.2c97.9 0 177.2-79.3 177.2-177.2S360.9 78.8 263 78.8"></svg:path>`,
})
export class SubwayCercle8Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
