import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNoodlesIcon],svg[hugeicons-noodles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 12a2.5 2.5 0 0 0-5 0M6 3v9m2.5-9.5v5M11 2v5.5m-7-3l2-.312M20 2l-6.5 1.016M4 7l2-.125M20 6l-6.5.406M4.911 12H19.09c1.602 0 2.19.37 1.79 1.982c-.706 2.843-2.703 3.549-4.549 5.404c-.448.45.25 1.117.25 1.613c0 .934-.887 1.001-1.595 1.001h-5.97c-.708 0-1.596-.067-1.595-1c0-.486.677-1.184.25-1.614c-1.846-1.855-3.843-2.561-4.549-5.404c-.4-1.611.188-1.982 1.79-1.982" color="currentColor"></svg:path>`,
})
export class HugeiconsNoodlesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
