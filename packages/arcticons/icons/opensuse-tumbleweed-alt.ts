import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpensuseTumbleweedAltIcon],svg[arcticons-opensuse-tumbleweed-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.296 29.304a7.5 7.5 0 0 1-10.607 0q0 0 0 0a7.5 7.5 0 0 1 0-10.607q0 0 0 0a7.5 7.5 0 0 1 10.607 0h0M29.704 28.95c2.929 2.734 7.678 2.734 10.607 0q0 0 0 0c2.929-2.733 2.929-7.165 0-9.899h0c-2.929-2.734-7.677-2.734-10.607 0q0 0 0 0M18.296 29.304L29.704 19.05m-9.908 3.648h2.5v-2.5m6.408 5.252h-2.5v2.5m-7.908-9.252l3.5 3.5m7.908 6.752l-3.5-3.5"></svg:path>`,
})
export class ArcticonsOpensuseTumbleweedAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
