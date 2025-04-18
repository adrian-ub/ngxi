import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBatdongsancomvnIcon],svg[arcticons-batdongsancomvn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.1 7.29a2.68 2.68 0 0 1 3.8 0l15.194 15.194a2.68 2.68 0 0 1 0 3.798l-5.698 5.698a2.68 2.68 0 0 1-3.798 0m-15.195 0l5.698-5.698a2.68 2.68 0 0 1 3.798 0l5.698 5.698m-15.195 0a2.68 2.68 0 0 1-3.798 0l-5.698-5.698a2.68 2.68 0 0 1 0-3.798L22.101 7.289a2.68 2.68 0 0 1 3.798 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.1 16.02a2.68 2.68 0 0 1 3.8 0l15.194 15.195a2.68 2.68 0 0 1 0 3.798l-5.698 5.698a2.68 2.68 0 0 1-3.798 0m-15.195 0l5.698-5.698a2.68 2.68 0 0 1 3.798 0l5.698 5.698m-15.195 0a2.68 2.68 0 0 1-3.798 0l-5.698-5.698a2.68 2.68 0 0 1 0-3.798L22.101 16.02a2.68 2.68 0 0 1 3.798 0m3.678-5.052V9.42c0-2.686 3.799-2.686 3.799 0v5.346"></svg:path>`,
})
export class ArcticonsBatdongsancomvnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
