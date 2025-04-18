import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPencilCircleLightIcon],svg[ph-pencil-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 1 0 55.88 200.12A102 102 0 1 0 200.12 55.87M106 134h44l14.1 30.56A30 30 0 0 0 128 174a30 30 0 0 0-36.11-9.46Zm5.54-12L128 86.32L144.47 122ZM134 192a18 18 0 0 1 36 0v15.64a89.3 89.3 0 0 1-36 10.14Zm-48 0a18 18 0 0 1 36 0v25.78a89.3 89.3 0 0 1-36-10.14Zm105.64-.36A93 93 0 0 1 182 200v-24a6 6 0 0 0-.55-2.51l-48-104a6 6 0 0 0-10.9 0l-48 104A6 6 0 0 0 74 176v24a93 93 0 0 1-9.64-8.37a90 90 0 1 1 127.28 0Z"></svg:path>`,
})
export class PhPencilCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
