import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBarsFadeIcon],svg[svg-spinners-bars-fade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="14" x="1" y="4" fill="currentColor"><svg:animate id="svgSpinnersBarsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsFade1.end-0.25s" dur="0.75s" values="1;.2"></svg:animate></svg:rect><svg:rect width="6" height="14" x="9" y="4" fill="currentColor" opacity=".4"><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsFade0.begin+0.15s" dur="0.75s" values="1;.2"></svg:animate></svg:rect><svg:rect width="6" height="14" x="17" y="4" fill="currentColor" opacity=".3"><svg:animate id="svgSpinnersBarsFade1" fill="freeze" attributeName="opacity" begin="svgSpinnersBarsFade0.begin+0.3s" dur="0.75s" values="1;.2"></svg:animate></svg:rect>`,
})
export class SvgSpinnersBarsFadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
