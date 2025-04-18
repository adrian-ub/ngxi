import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVoicemailIcon],svg[icon-park-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M11 31C14.866 31 18 27.866 18 24C18 20.134 14.866 17 11 17C7.13401 17 4 20.134 4 24C4 27.866 7.13401 31 11 31Z"></svg:path><svg:path fill="#2F88FF" d="M37 31C40.866 31 44 27.866 44 24C44 20.134 40.866 17 37 17C33.134 17 30 20.134 30 24C30 27.866 33.134 31 37 31Z"></svg:path><svg:path stroke-linecap="round" d="M12 31H36"></svg:path></svg:g>`,
})
export class IconParkVoicemailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
