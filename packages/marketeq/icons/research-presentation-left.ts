import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqResearchPresentationLeftIcon],svg[marketeq-research-presentation-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 16.667H16.667M31.604 37.75l5.896 6zm-4.52-10.667a6.25 6.25 0 1 1-.001 12.501a6.25 6.25 0 0 1 0-12.5"></svg:path><svg:path stroke="#306CFE" d="M41.667 31.25v-25H8.333v25a2.083 2.083 0 0 0 2.084 2.083H12.5M43.75 6.25H6.25"></svg:path></svg:g>`,
})
export class MarketeqResearchPresentationLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
