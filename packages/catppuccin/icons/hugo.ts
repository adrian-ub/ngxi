import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinHugoIcon],svg[catppuccin-hugo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#f5bde6" d="M7.991 2.163L2.823 5.317l.031 6.062l5.157 3.009l5.257-3.238l-.031-6.155Z"></svg:path><svg:path stroke="#cad3f5" d="m6.007 5.095l.046 6.269m.051-3.372l3.889-.003m.01-2.902l-.028 6.247"></svg:path></svg:g>`,
})
export class CatppuccinHugoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
