import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBedtimeOutlineRoundedIcon],svg[material-symbols-bedtime-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.1 22q-2.1 0-3.937-.8t-3.2-2.162t-2.163-3.2T2 11.9q0-3.2 1.8-5.8t4.825-3.65q.55-.2 1.025.138t.45.912q-.075 2.125.675 4.05t2.25 3.425t3.425 2.25t4.05.675q.65-.025.963.438t.112 1.037q-1.1 3-3.687 4.813T12.1 22m0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412t-2.425-3.45T8.1 4.85Q6.175 5.925 5.088 7.813T4 11.9q0 3.375 2.363 5.738T12.1 20m-.5-7.625"></svg:path>`,
})
export class MaterialSymbolsBedtimeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
