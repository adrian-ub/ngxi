import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlashLightIcon],svg[lets-icons-flash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 17.5h-15m2.5 0l1.347-7.184A1 1 0 0 1 9.33 9.5h5.34a1 1 0 0 1 .983.816L17 17.5m4.5-8h-3m-6.5-7v3m6.5-1l-2 2m-11-2l2 2m-2 3h-3m10 2h1"></svg:path>`,
})
export class LetsIconsFlashLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
