import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPentagonOutlineRoundedIcon],svg[material-symbols-light-pentagon-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.527 19.5h8.946q.212 0 .366-.115q.153-.116.211-.308l3.017-9.052q.058-.192 0-.394t-.23-.317l-7.49-5.23Q12.191 3.97 12 3.97t-.346.116l-7.49 5.229q-.173.115-.231.317t0 .394l3.017 9.052q.058.192.212.308t.365.115m0 1q-.535 0-.954-.298q-.42-.298-.58-.808L2.974 10.33q-.161-.516 0-1.025q.162-.51.616-.808l7.49-5.235q.429-.292.919-.292t.92.292l7.49 5.235q.454.298.615.808q.162.51 0 1.025l-3.017 9.065q-.162.51-.581.808q-.42.298-.954.298zM12 11.725"></svg:path>`,
})
export class MaterialSymbolsLightPentagonOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
