import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileVueBoldIcon],svg[ph-file-vue-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m87.3 156l-20 56a12 12 0 0 1-22.6 0l-20-56a12 12 0 0 1 22.6-8l8.7 24.32L64.7 148a12 12 0 0 1 22.6 8M212 196h-20v-4h12a12 12 0 0 0 0-24h-12v-4h20a12 12 0 0 0 0-24h-32a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12h32a12 12 0 0 0 0-24m-68-56a12 12 0 0 0-12 12v38a6 6 0 0 1-12 0v-38a12 12 0 0 0-24 0v38a30 30 0 0 0 60 0v-38a12 12 0 0 0-12-12M36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-28h23l-23-23Z"></svg:path>`,
})
export class PhFileVueBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
