import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMartiniThinIcon],svg[ph-martini-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 42.83A4 4 0 0 0 232 36H24a4 4 0 0 0-2.83 6.83L124 145.66V212H88a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8h-36v-66.34ZM33.66 44h188.68l-24 24H57.66ZM128 138.34L65.66 76h124.68Z"></svg:path>`,
})
export class PhMartiniThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
