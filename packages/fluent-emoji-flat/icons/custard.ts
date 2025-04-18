import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCustardIcon],svg[fluent-emoji-flat-custard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F3AD61" d="m24.689 19l-.277-.14l-8.424-1l-8.423 1l-.222.14l-1.733 7h20.77z"></svg:path><svg:path fill="#A56953" d="M9.84 15c-.88 0-1.66.61-1.87 1.47l-.002.008L7.343 19H24.69l-.609-2.52c-.2-.87-.98-1.48-1.87-1.48z"></svg:path><svg:path fill="#A56953" d="M9.84 15c-.88 0-1.66.61-1.87 1.47L7.34 19H24.7l-.61-2.52c-.21-.87-.99-1.48-1.88-1.48z"></svg:path><svg:path fill="#FFDEA7" d="m21.06 19l1.867 7.837a.781.781 0 0 0 1.52-.362L22.668 19z"></svg:path><svg:path fill="#E39D89" d="M22.4 17.879a.781.781 0 1 0-1.52.362l.18.759h1.607z"></svg:path><svg:path fill="#9B9B9B" d="M4 28c1.28 1.28 3.02 2 4.83 2h14.34c1.81 0 3.55-.72 4.83-2l-12-1z"></svg:path><svg:path fill="#D3D3D3" d="M29 28H3c-.55 0-1-.45-1-1s.45-1 1-1h26c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCustardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
