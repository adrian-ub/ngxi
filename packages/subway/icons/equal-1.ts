import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayEqual1Icon],svg[subway-equal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 144v85.3h512V144zm0 256h512v-85.3H0z"></svg:path>`,
})
export class SubwayEqual1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
