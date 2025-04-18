import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayLeftArrow1Icon],svg[subway-left-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.3 205.3v-128L0 248l213.3 170.7v-128H512v-85.4z"></svg:path>`,
})
export class SubwayLeftArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
