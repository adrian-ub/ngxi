import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsFullIcon],svg[ls-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m338 272l70 69c4 4 8 6 14 6c5 0 9-2 13-6l119-118l72 72c23 22 40 13 40-18V51c0-19-16-37-38-37H402c-32 0-40 17-17 40l72 72l-119 118c-3 4-5 9-5 14c0 6 2 10 5 14M0 416v227c0 19 16 37 38 37h225c32 0 41-17 18-40l-72-72l119-119c3-4 5-8 5-14c0-5-2-9-5-13l-70-70c-4-3-8-5-14-5c-5 0-10 2-14 5L112 471l-72-72c-23-22-40-14-40 17"></svg:path>`,
})
export class LsFullIcon {
  readonly viewBox = input("0 0 666 680")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
