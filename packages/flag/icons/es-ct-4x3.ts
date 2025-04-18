import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEsCt4x3Icon],svg[flag-es-ct-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcdd09" d="M0 0h640v480H0z"></svg:path><svg:path stroke="#da121a" stroke-width="60" d="M0 90h810m0 120H0m0 120h810m0 120H0" transform="scale(.79012 .88889)"></svg:path>`,
})
export class FlagEsCt4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
