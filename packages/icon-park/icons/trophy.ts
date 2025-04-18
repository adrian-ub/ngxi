import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTrophyIcon],svg[icon-park-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z"></svg:path><svg:path stroke-linecap="round" d="M12 21V11H4C4 17.6667 8 21 12 21Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M36 21V11H44C44 17.6667 40 21 36 21Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 32V36"></svg:path><svg:path fill="#2F88FF" d="M15 42L18.69 36H29.0425L33 42H15Z"></svg:path></svg:g>`,
})
export class IconParkTrophyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
