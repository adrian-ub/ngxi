import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransitionRightIcon],svg[hugeicons-transition-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18zm14 16c2.339 0 3.508 0 4.362-.537a3.5 3.5 0 0 0 1.102-1.1C22 19.507 22 18.338 22 16V8c0-2.339 0-3.508-.537-4.362a3.5 3.5 0 0 0-1.1-1.102C19.507 2 18.338 2 16 2"></svg:path><svg:path d="M18 12h-8m8 0c0-.7-1.994-2.008-2.5-2.5M18 12c0 .7-1.994 2.008-2.5 2.5"></svg:path></svg:g>`,
})
export class HugeiconsTransitionRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
