import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutGymnasticsIcon],svg[hugeicons-workout-gymnastics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.996 9.501c0 .826-.67 1.496-1.499 1.496c-.828 0-1.499-.67-1.499-1.496c0-.825.671-1.495 1.5-1.495c.827 0 1.498.67 1.498 1.495M8.966 3l.859 5.772q.042.292.043.585v.081q0 .316-.066.622l-.05.234a1 1 0 0 1-.08.23l-2.68 5.466m3.432-7.235l5.518 2.304l.559.243c.338.147.596.432.707.783L20.002 21M9.51 11.96l5.124 2.011m0 0l-2.615 6.903m2.615-6.903l2.183-2.165" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutGymnasticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
