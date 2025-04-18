import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinuxMintIcon],svg[arcticons-linux-mint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.31 19.117a3.807 3.807 0 1 0-7.614 0v9.063"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.31 28.18v-8.847c0-2.062 1.543-3.91 3.601-4.017a3.807 3.807 0 0 1 4.012 3.801v9.59a5.916 5.916 0 0 1-5.917 5.917H18.995a5.916 5.916 0 0 1-5.916-5.916V13.376"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLinuxMintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
