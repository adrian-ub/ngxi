import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsServiigoIcon],svg[arcticons-serviigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.47 22.95a10.165 10.165 0 0 0-15.855 8.422m4.481 8.428a10.165 10.165 0 0 0 15.847-8.428"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.185 31.372h3.82l-5.253 5.252L4.5 31.372zm17.189-.001h-3.819l5.252-5.253l5.252 5.253zm5.28-5.125a14.81 14.81 0 0 0-11.328-9.443m16.039 7.703a19.84 19.84 0 0 0-15.175-12.65M43.5 22.609A25.32 25.32 0 0 0 24.132 6.465"></svg:path>`,
})
export class ArcticonsServiigoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
