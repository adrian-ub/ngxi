import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionHexagramStarJewJewishJudaismHexagramCultureReligionDavidIcon],svg[streamline-religion-hexagram-star-jew-jewish-judaism-hexagram-culture-religion-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.5h13L7 13.5L.5 3.5z"></svg:path><svg:path d="M.5 10.5h13L7 .5l-6.5 10z"></svg:path></svg:g>`,
})
export class StreamlineReligionHexagramStarJewJewishJudaismHexagramCultureReligionDavidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
