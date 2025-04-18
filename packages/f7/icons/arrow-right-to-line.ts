import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowRightToLineIcon],svg[f7-arrow-right-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.352 28.012c0 1.218.843 2.086 2.085 2.086H33.11l5.016-.164l-7.711 7.03l-5.18 5.25a2.25 2.25 0 0 0-.586 1.524c0 1.172.891 2.016 2.04 2.016c.585 0 1.101-.211 1.593-.68l15.516-15.492c.351-.328.562-.703.656-1.102v15.352c0 1.195.89 2.016 2.11 2.016c1.218 0 2.085-.82 2.085-2.016V12.215c0-1.219-.867-2.063-2.086-2.063s-2.109.844-2.109 2.063V27.52a2.17 2.17 0 0 0-.656-1.102L28.28 10.926c-.492-.469-1.008-.703-1.593-.703c-1.149 0-2.04.867-2.04 2.039c0 .562.211 1.125.586 1.5l5.18 5.273l7.688 7.055l-4.993-.188H9.438c-1.243 0-2.086.867-2.086 2.11"></svg:path>`,
})
export class F7ArrowRightToLineIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
