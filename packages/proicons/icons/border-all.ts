import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBorderAllIcon],svg[proicons-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20.25h4.25a4 4 0 0 0 4-4V12M12 20.25H7.75a4 4 0 0 1-4-4V12M12 20.25V3.75m0 0H7.75a4 4 0 0 0-4 4V12M12 3.75h4.25a4 4 0 0 1 4 4V12m-16.5 0h16.5"></svg:path>`,
})
export class ProiconsBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
