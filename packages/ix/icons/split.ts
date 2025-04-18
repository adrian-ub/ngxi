import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSplitIcon],svg[ix-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m368.917 100.42l27.58 27.58H279.163L172.497 234.667H42.667v42.666h129.83L279.163 384H396.5l-27.583 27.583l30.169 30.17l79.085-79.085l-79.085-79.085l-30.169 30.17l27.58 27.58h-99.661L211.503 256l85.333-85.333H396.5l-27.583 27.583l30.169 30.17l79.085-79.085l-79.085-79.085z" clip-rule="evenodd"></svg:path>`,
})
export class IxSplitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
