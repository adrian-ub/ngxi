import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCookingPotIcon],svg[icon-park-cooking-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M10 44H38V20.9474C38 14.9013 31.732 10 24 10C16.268 10 10 14.9013 10 20.9474V44Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M38 22.0437C38 21.8001 38 21.4346 38 20.9474C38 14.9013 31.732 10 24 10C16.268 10 10 14.9013 10 20.9474C10 21.4332 10 21.7975 10 22.0404L38 22.0437Z"></svg:path><svg:path stroke-linecap="round" d="M4 22H44"></svg:path><svg:path stroke-linecap="round" d="M21 4H27"></svg:path></svg:g>`,
})
export class IconParkCookingPotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
