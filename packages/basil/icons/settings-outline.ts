import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilSettingsOutlineIcon],svg[basil-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.199 2.587a1.65 1.65 0 0 1 1.602 0l7.2 4c.524.291.849.843.849 1.443v7.94c0 .6-.325 1.152-.849 1.443l-7.2 4a1.65 1.65 0 0 1-1.602 0l-7.2-4a1.65 1.65 0 0 1-.849-1.443V8.03c0-.6.325-1.152.849-1.443zm.874 1.312a.15.15 0 0 0-.146 0l-7.2 4a.15.15 0 0 0-.077.13v7.942c0 .054.03.104.077.13l7.2 4a.15.15 0 0 0 .146 0l7.2-4a.15.15 0 0 0 .077-.13V8.03a.15.15 0 0 0-.077-.131z"></svg:path><svg:path d="M7.25 12a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"></svg:path></svg:g>`,
})
export class BasilSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
