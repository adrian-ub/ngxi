import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGymnasticRingsIcon],svg[hugeicons-gymnastic-rings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 22a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-11V2M12 9.303A5.51 5.51 0 0 0 7.513 7A5.507 5.507 0 0 0 2 12.5c0 3.244 2.928 5.829 6.14 5.466M7.5 7V2" color="currentColor"></svg:path>`,
})
export class HugeiconsGymnasticRingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
