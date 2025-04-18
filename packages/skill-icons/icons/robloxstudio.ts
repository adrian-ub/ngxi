import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsRobloxstudioIcon],svg[skill-icons-robloxstudio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="#009FFF" clip-path="url(#skillIconsRobloxstudio0)"><svg:path d="M256 0H0v101.32l90.59 24.248l11.426-42.608L256 124.228zm0 154.68l-90.59-24.281l-11.426 42.606L0 131.739V256h256z"></svg:path></svg:g><svg:defs><svg:clippath id="skillIconsRobloxstudio0"><svg:rect width="256" height="256" fill="#fff" rx="60"></svg:rect></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsRobloxstudioIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
