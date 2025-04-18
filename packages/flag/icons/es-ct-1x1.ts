import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEsCt1x1Icon],svg[flag-es-ct-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcdd09" d="M0 0h512v512H0z"></svg:path><svg:path stroke="#da121a" stroke-width="60" d="M0 90h810m0 120H0m0 120h810m0 120H0" transform="scale(.6321 .94815)"></svg:path>`,
})
export class FlagEsCt1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
