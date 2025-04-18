import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidPersonalHygieneHandWipePaper3Icon],svg[covid-personal-hygiene-hand-wipe-paper-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.5.75v5a2 2 0 0 0 2 2h1m18-7v5a2 2 0 0 1-2 2h-1M9.786 18.893l1.714.857l2-1l2 1l2-1l2 1V4.25h-15v10.5m-3 8.5v-6.824a5 5 0 0 1 2.226-4.16l.774-.516"></svg:path><svg:path d="m7.5 21.75l2.714-3.393a1.887 1.887 0 0 0-.427-2.749v0a1.886 1.886 0 0 0-2.381.236L5.5 17.75"></svg:path></svg:g>`,
})
export class CovidPersonalHygieneHandWipePaper3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
