import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPieChartFillIcon],svg[lets-icons-pie-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.906 17.231c.393.45 1.093.458 1.438-.028a9 9 0 0 0 1.562-6.503c-.086-.59-.714-.9-1.268-.678l-4.645 1.858a1 1 0 0 0-.38 1.587zM19.346 6.8c.344.487.103 1.144-.45 1.366l-4.525 1.81A1 1 0 0 1 13 9.044V4.175c0-.597.52-1.065 1.1-.925a9 9 0 0 1 5.245 3.55"></svg:path><svg:path d="M11 3.156c0-.592-.513-1.059-1.092-.935a10 10 0 1 0 6.957 18.516c.517-.288.596-.977.207-1.422L11.285 12.7a1.15 1.15 0 0 1-.285-.757z"></svg:path></svg:g>`,
})
export class LetsIconsPieChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
