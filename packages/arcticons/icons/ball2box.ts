import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBall2boxIcon],svg[arcticons-ball2box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.7 25.08l-1.734 3.003V43.5h20.068V28.083l-1.668-3.002zm-1.734 3.003h20.068"></svg:path><svg:circle cx="23.87" cy="35.88" r="5.264" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.794" cy="35.925" r="1.155" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.78" cy="17.881" r="4.496" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.44 9.31l1.415 4.718m-.361-7.98l1.898 6.654m-.32-8.202l2.039 7.38m.162-6.549l1.778 6.25m.748-4.511l1.314 4.92"></svg:path>`,
})
export class ArcticonsBall2boxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
