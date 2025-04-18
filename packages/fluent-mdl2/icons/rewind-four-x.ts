import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RewindFourXIcon],svg[fluent-mdl2-rewind-four-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 507L1664-5v1035l-640-517v517L380 510L1024-5zM896 762V261L584 511zm640 0V261l-312 250zm-627 390v592h115v93H909v211H808v-211H387v-88q59-66 116-137t111-147t101-153t85-160zm-101 592v-439q-66 118-143 225t-163 214zm724-336h113l-215 324l211 316h-119q-38-64-77-127t-77-129h-2q-8 12-14 24t-15 25l-129 207h-118l218-314l-208-326h119q38 67 76 133t75 136h2z"></svg:path>`,
})
export class FluentMdl2RewindFourXIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
