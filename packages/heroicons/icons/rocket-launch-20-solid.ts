import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsRocketLaunch20SolidIcon],svg[heroicons-rocket-launch-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.606 12.97a.75.75 0 0 1-.134 1.051a2.49 2.49 0 0 0-.93 2.437q.222.042.458.042c.805 0 1.52-.38 1.979-.972a.75.75 0 1 1 1.186.918a3.995 3.995 0 0 1-4.482 1.332a.75.75 0 0 1-.461-.461a3.99 3.99 0 0 1 1.332-4.482a.75.75 0 0 1 1.052.134"></svg:path><svg:path d="M5.752 12A13 13 0 0 0 8 14.248v4.002c0 .414.336.75.75.75a5 5 0 0 0 4.797-6.414a12.98 12.98 0 0 0 5.45-10.848a.75.75 0 0 0-.735-.735L18 1C13.634 1 9.77 3.153 7.414 6.453A5 5 0 0 0 1 11.25c0 .414.336.75.75.75zM13 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class HeroiconsRocketLaunch20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
