import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayHulfOfCircle2Icon],svg[subway-hulf-of-circle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M159 0v512c141.4 0 256-114.6 256-256S300.4 0 159 0"></svg:path>`,
})
export class SubwayHulfOfCircle2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
