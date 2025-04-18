import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqToiletPaper9Icon],svg[marketeq-toilet-paper-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 14.583h-8.334m8.334 12.5V43.75l-3.48-2.083l-3.479 2.083L25 41.667l-3.458 2.083l-3.5-2.083l-3.459 2.083V27.083zm-16.667-12.5h-4.167z"></svg:path><svg:path stroke="#306CFE" d="M43.75 25V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083V25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqToiletPaper9Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
