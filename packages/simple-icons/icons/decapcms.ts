import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDecapcmsIcon],svg[simple-icons-decapcms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.947 13.177c0 3.263-2 5.649-4.736 5.649h-2.773v-5.65H6.282v10.387h7.93c5.403 0 9.788-4.668 9.788-10.386h-5.052ZM7.894.476L0 1.212l.948 10.352l5.157-.456l-.526-5.615l2.737-.245c2.737-.246 4.91 1.93 5.227 5.193l5.052-.458c-.49-5.752-5.297-9.998-10.7-9.507Z"></svg:path>`
})
export class SimpleIconsDecapcmsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
