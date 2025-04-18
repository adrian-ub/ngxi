import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RewindOneXIcon],svg[fluent-mdl2-rewind-one-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 507L1664-5v1035l-640-517v517L380 510L1024-5zM896 762V261L584 511zm640 0V261l-312 250zm-678 390h38v896H796v-757q-19 17-44 33t-52 29t-54 25t-53 17v-102q30-8 67-23t73-34t69-41t56-43m674 256h113l-215 324l211 316h-119q-38-64-77-127t-77-129h-2q-8 12-14 24t-15 25l-129 207h-118l218-314l-208-326h119q38 67 76 133t75 136h2z"></svg:path>`,
})
export class FluentMdl2RewindOneXIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
