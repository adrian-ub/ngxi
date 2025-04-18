import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVerilogIcon],svg[catppuccin-verilog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 2.5h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2"></svg:path><svg:path d="M5.5 5.5h5v5h-5zm8.5 0h1.5M14 8h1.5M14 10.5h1.5M.5 5H2M.5 7.5H2M.5 10H2m3.5-8V.5M8 2V.5M10.5 2V.5m-5 15V14M8 15.5V14m2.5 1.5V14"></svg:path></svg:g>`,
})
export class CatppuccinVerilogIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
