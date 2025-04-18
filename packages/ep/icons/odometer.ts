import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epOdometerIcon],svg[ep-odometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"></svg:path><svg:path fill="currentColor" d="M192 512a320 320 0 1 1 640 0a32 32 0 1 1-64 0a256 256 0 1 0-512 0a32 32 0 0 1-64 0"></svg:path><svg:path fill="currentColor" d="M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928a32 32 0 0 0-19.84 60.928"></svg:path>`,
})
export class EpOdometerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
