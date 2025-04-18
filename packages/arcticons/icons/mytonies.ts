import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMytoniesIcon],svg[arcticons-mytonies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.2 4.5c-1.782.027-10.841 10-10.841 10h-7.574s-5.431-7.78-7.043-7.797c-1.145 2.866-1.32 6.031-1.35 9.013C9.804 16.996 9.48 19.29 9.48 21.5v15c0 3.878 3.122 7 7 7h15c3.878 0 7-3.122 7-7c0 0 .2-31.872-.28-32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.728 32.692c3.865 3.65 11.602 2.37 12.504 1.812"></svg:path>`,
})
export class ArcticonsMytoniesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
