import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsTargetIcon],svg[duo-icons-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v.055a9.005 9.005 0 0 1 7.911 7.674l.034.271H21a1 1 0 0 1 .117 1.993L21 13h-.055a9.005 9.005 0 0 1-7.674 7.911l-.271.034V21a1 1 0 0 1-1.993.117L11 21v-.055a9.005 9.005 0 0 1-7.911-7.674L3.055 13H3a1 1 0 0 1-.117-1.993L3 11h.055a9.005 9.005 0 0 1 7.674-7.911L11 3.055V3a1 1 0 0 1 1-1" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 7c-3.849 0-6.255 4.167-4.33 7.5A5 5 0 0 0 12 17c3.849 0 6.255-4.167 4.33-7.5A5 5 0 0 0 12 7" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsTargetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
