import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKonvaIcon],svg[simple-icons-konva-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m1.391 18.541l-.239-3.76l-2.391-1.608l.152 5.129l-4.325.152l-.173-13.409L10.5 4.98l.087 5.346l2.217-1.608l.109-3.781l4.412.283l-.348 4.586l-2.608 1.608l2.673 1.174l.913 5.694z"></svg:path>`
})
export class SimpleIconsKonvaIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
