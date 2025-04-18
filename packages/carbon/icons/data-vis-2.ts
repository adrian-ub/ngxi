import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataVis2Icon],svg[carbon-data-vis-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H17a2 2 0 0 0-2 2v6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6h11a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m0 2v4H17V4ZM15 22H4v-4h11Zm2-12h11l.001 4H17Zm-2 2v4H4v-4ZM4 28v-4h11.001v4Zm13-8v-4h11.002v4Z"></svg:path>`,
})
export class CarbonDataVis2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
