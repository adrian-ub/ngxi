import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGhostBoldIcon],svg[ph-ghost-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 116a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 20v96a12 12 0 0 1-19.6 9.29l-21.73-17.79l-21.74 17.79a12 12 0 0 1-15.2 0L128 207.5l-21.73 17.79a12 12 0 0 1-15.2 0L69.33 207.5L47.6 225.29A12 12 0 0 1 28 216v-96a100 100 0 0 1 200 0m-24 0a76 76 0 0 0-152 0v70.68l9.73-8a12 12 0 0 1 15.2 0l21.74 17.82l21.73-17.79a12 12 0 0 1 15.2 0l21.73 17.79l21.74-17.79a12 12 0 0 1 15.2 0l9.73 8Z"></svg:path>`,
})
export class PhGhostBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
