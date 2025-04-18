import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibHexoIcon],svg[cib-hexo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 .011L2.093 8.074v15.995L16 31.996l13.907-8.068V7.939zm6.396 22.806l-1.251.693l-1.249-.693v-5.563h-7.792v5.563l-1.249.693l-1.251-.693V9.188l1.251-.699l1.249.699v5.561h7.792V9.188l1.249-.699l1.251.699z"></svg:path>`,
})
export class CibHexoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
