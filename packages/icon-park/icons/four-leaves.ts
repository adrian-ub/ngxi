import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFourLeavesIcon],svg[icon-park-four-leaves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 4.00006C44 4.00006 33.5899 2.20108 30 8.00006C27.3278 12.3167 31 17.0001 31 17.0001M44 4.00006L31 17.0001M44 4.00006C44 4.00006 45.799 14.4102 40 18.0001C35.6834 20.6723 31 17.0001 31 17.0001M31 17.0001L28 20.0001"></svg:path><svg:path d="M31 31L28 28M44 44C44 44 33.5899 45.799 30 40C27.3278 35.6834 31 31 31 31L44 44ZM44 44C44 44 45.799 33.5899 40 30C35.6834 27.3278 31 31 31 31L44 44ZM44 44L31 31L44 44Z"></svg:path><svg:path d="M17.2638 17.0001L20.2638 20.0001M4.26374 4.00006C4.26374 4.00006 14.6739 2.20108 18.2638 8.00006C20.936 12.3167 17.2638 17.0001 17.2638 17.0001L4.26374 4.00006ZM4.26374 4.00006C4.26374 4.00006 2.46475 14.4102 8.26374 18.0001C12.5804 20.6723 17.2638 17.0001 17.2638 17.0001L4.26374 4.00006ZM4.26374 4.00006L17.2638 17.0001L4.26374 4.00006Z"></svg:path><svg:path d="M17.2638 31L20.2638 28M4.26374 44C4.26374 44 14.6739 45.799 18.2638 40C20.936 35.6834 17.2638 31 17.2638 31L4.26374 44ZM4.26374 44C4.26374 44 2.46475 33.5899 8.26374 30C12.5804 27.3278 17.2638 31 17.2638 31L4.26374 44ZM4.26374 44L17.2638 31L4.26374 44Z"></svg:path></svg:g>`,
})
export class IconParkFourLeavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
