import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChemistryIcon],svg[marketeq-chemistry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 43.75H12.5a2.083 2.083 0 0 1-2.083-2.083V6.25M6.25 14.583h20.833"></svg:path><svg:path stroke="#344054" d="M25 8.333h12.5m-2.083 20.834V8.333h-8.334v20.834a4.167 4.167 0 1 0 8.334 0"></svg:path></svg:g>`,
})
export class MarketeqChemistryIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
