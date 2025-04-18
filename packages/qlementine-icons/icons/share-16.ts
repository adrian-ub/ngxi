import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsShare16Icon],svg[qlementine-icons-share-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 3a2.996 2.996 0 0 1-5.34 1.87L5.83 7c.111.313.171.649.171 1s-.06.687-.171 1l3.83 2.13A2.996 2.996 0 0 1 15 13c0 1.66-1.34 3-3 3a2.996 2.996 0 0 1-2.829-4l-3.83-2.13A2.996 2.996 0 0 1 .001 8a2.996 2.996 0 0 1 5.34-1.87L9.171 4A2.996 2.996 0 0 1 12 0c1.66 0 3 1.34 3 3m-1 0a2 2 0 1 1-4.001.001A2 2 0 0 1 14 3M5 8a2 2 0 1 1-4.001.001A2 2 0 0 1 5 8m7 7a2 2 0 1 0 .001-4.001A2 2 0 0 0 12 15" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsShare16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
