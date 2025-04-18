import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTentLightIcon],svg[ph-tent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.48 189.56l-64-144A6 6 0 0 0 184 42H72a6 6 0 0 0-5.45 3.51v.14L2.52 189.56A6 6 0 0 0 8 198h240a6 6 0 0 0 5.48-8.44M66 76.27V186H17.23ZM78 186V76.27L126.77 186Zm61.9 0L81.23 54h98.87l58.67 132Z"></svg:path>`,
})
export class PhTentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
