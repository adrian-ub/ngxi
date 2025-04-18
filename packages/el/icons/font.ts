import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFontIcon],svg[el-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M335.151 763.202h435.208L552.753 199.336L335.147 763.202M.004 1192.852v-84.182h104.038L526.542 7.148h133.42l423.294 1101.521H1200v84.182H768.761v-84.182h131.834l-99.271-260.488H302.581l-99.272 260.488h130.244v84.182H0"></svg:path>`,
})
export class ElFontIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
