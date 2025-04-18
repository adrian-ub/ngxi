import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTap07Icon],svg[hugeicons-tap-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 6a4 4 0 0 0-8 0"></svg:path><svg:path d="M10.318 8.921V6.364a1.364 1.364 0 0 0-2.727 0v7.892L6.118 12.8a1.547 1.547 0 0 0-2.282.125a1.5 1.5 0 0 0-.03 1.854l2.732 3.595c.62.816.93 1.224 1.302 1.541c.57.484 1.25.82 1.984.98c.48.104.997.104 2.03.104c1.97 0 2.955 0 3.739-.297a4.5 4.5 0 0 0 2.606-2.573c.301-.774.301-1.747.301-3.691v-2.213a1.8 1.8 0 0 0-1.52-1.765l-.31-.05a.766.766 0 0 0-.897.747M10.318 8.92l.525-.258c.253-.125.535-.205.81-.14a1.796 1.796 0 0 1 1.393 1.74M10.318 8.92v2.237m2.728-.895v.895m0-.895c0-.494.407-.895.909-.895c1.004 0 1.818.802 1.818 1.79m0 0v.895"></svg:path></svg:g>`,
})
export class HugeiconsTap07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
