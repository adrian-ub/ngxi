import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuntingtonIcon],svg[arcticons-huntington-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.482 4.5v11.592m-5.936-7.847v31.51M8.61 11.989v23.943m5.936-9.948l11.872-6.854V4.5m1.1 39V31.908m5.936 7.847V8.245m5.936 27.766V12.068m-5.936 9.948L21.582 28.87V43.5"></svg:path>`,
})
export class ArcticonsHuntingtonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
