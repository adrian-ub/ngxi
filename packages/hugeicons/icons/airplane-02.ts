import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirplane02Icon],svg[hugeicons-airplane-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 9.5L5.275 4.476c-.418-.452-.351-.781.142-1.066c.928-.537 1.65-.551 2.627-.015l4.905 2.692c.35.191.692.386 1.051.492m-1.5 7.084l2.11 6.807c.173.556.476.656.946.387c.884-.507 1.24-1.092 1.264-2.146l.12-5.291c.015-.707.013-1.399.56-1.92"></svg:path><svg:path d="m8.328 10.984l1.887-1.378l4.423-3.225l.004-.003l.007-.005c.105-.076 1.66-1.21 2.543-1.597c1.084-.475 2.095-.254 3.182.05c.562.156.843.235 1.046.381c.322.233.531.59.574.981c.027.247-.044.527-.187 1.086h0c-.278 1.08-.589 2.054-1.548 2.744c-.78.56-2.555 1.323-2.673 1.374l-.009.004l-.004.001l-5.041 2.167l-2.154.924h0c-.78.334-1.171.502-1.437.812c-.622.727-.71 2.044-.942 2.95c-.128.5-.832 1.367-1.458 1.237c-.387-.08-.395-.565-.443-.874l-.464-2.974c-.11-.711-.12-.726-.688-1.176l-2.378-1.884c-.247-.195-.669-.444-.546-.815c.2-.6 1.312-.768 1.815-.628c.911.255 2.11.838 3.06.67c.405-.072.747-.322 1.431-.822"></svg:path></svg:g>`,
})
export class HugeiconsAirplane02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
