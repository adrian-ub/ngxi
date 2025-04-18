import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTranslate1Icon],svg[tdesign-translate-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2v2.5H2v2h7.46a15 15 0 0 1-2.085 3.665A15 15 0 0 1 5.91 7.868l-.459-.889l-1.777.917l.458.889a17 17 0 0 0 1.894 2.9a15 15 0 0 1-3.028 2.309l-.865.5l1.001 1.732l.866-.501a17 17 0 0 0 3.374-2.56a17 17 0 0 0 3.374 2.56l.866.501l1.001-1.731l-.865-.5a15 15 0 0 1-3.029-2.31A17 17 0 0 0 11.59 6.5H13v-2H8.5V2zm10 7.164l-5.832 12.312l1.808.856L13.58 20h5.84l1.104 2.332l1.808-.856zM18.472 18h-3.944l1.972-4.164z"></svg:path>`,
})
export class TdesignTranslate1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
